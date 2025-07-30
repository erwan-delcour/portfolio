import * as React from "react";
import { Row, Col } from "react-bootstrap";

interface GitLabEvent {
  created_at: string;
  action_name: string;
}

interface DayData {
  date: string;
  count: number;
}

function Github(): React.ReactElement {
  const [gitlabContributions, setGitlabContributions] = React.useState<number | null>(null);
  const [combinedData, setCombinedData] = React.useState<DayData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  // Fonction pour générer le calendrier personnalisé
  const generateCalendarGrid = React.useCallback((data: DayData[]) => {
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    oneYearAgo.setDate(today.getDate() + 1);
    
    // Créer un map pour accès rapide aux données
    const dataMap = new Map(data.map(d => [d.date, d.count]));
    
    // Calculer le premier dimanche d'il y a un an
    let startDate = new Date(oneYearAgo);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    
    // Créer la grille: 7 lignes (jours) × 53 colonnes (semaines)
    const grid: Array<{
      date: string;
      count: number;
      color: string;
      dayOfWeek: number;
      weekIndex: number;
    }> = [];
    
    // Parcourir les 53 semaines
    for (let week = 0; week < 53; week++) {
      // Pour chaque jour de la semaine (0 = dimanche, 6 = samedi)
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (week * 7) + day);
        
        // Ne pas dépasser aujourd'hui
        if (currentDate > today) continue;
        
        const dateStr = currentDate.toISOString().split('T')[0];
        const count = dataMap.get(dateStr) || 0;
        
        // Debug pour juillet 2025
        if (currentDate.getMonth() === 6 && currentDate.getFullYear() === 2025 && count > 0) {
          console.log(`Debug calendrier COLUMN - ${dateStr}: ${count} contributions (semaine ${week}, jour ${day})`);
        }
        
        // Déterminer la couleur basée sur le nombre de contributions
        let color = '#161b22'; // Aucune contribution
        if (count > 0) color = '#0e4429';  // 1-2 contributions
        if (count > 2) color = '#006d32';  // 3-5 contributions
        if (count > 5) color = '#26a641';  // 6-10 contributions
        if (count > 10) color = '#39d353'; // 10+ contributions
        
        grid.push({
          date: dateStr,
          count,
          color,
          dayOfWeek: day,
          weekIndex: week
        });
      }
    }
    
    return grid;
  }, []);

  // Générer les labels de mois pour le calendrier
  const generateMonthLabels = React.useCallback(() => {
    const months = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    oneYearAgo.setDate(today.getDate() + 1);
    
    // Utiliser la même logique que generateCalendarGrid pour l'alignement
    let currentDate = new Date(oneYearAgo);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());
    let lastMonth = -1;
    let firstMonthSkipped = false;
    // Parcourir les 53 semaines
    for (let week = 0; week < 53; week++) {
      const weekStartDate = new Date(currentDate);
      weekStartDate.setDate(currentDate.getDate() + (week * 7));
      
      const month = weekStartDate.getMonth();
      const year = weekStartDate.getFullYear();
      
      // Debug pour juillet 2025
      if (month === 6 && year === 2025) {
        console.log(`Debug - Semaine ${week}, Juillet 2025 détecté:`, weekStartDate.toISOString().split('T')[0]);
      }
      
      // Si c'est un nouveau mois
      if (month !== lastMonth) {
        // Skip le tout premier mois pour éviter les problèmes d'alignement
        if (!firstMonthSkipped) {
          firstMonthSkipped = true;
          lastMonth = month;
          continue;
        }
        
        // Vérifier qu'on a assez d'espace pour afficher le mois (au moins 3 semaines restantes)
        if (week <= 50) {
          const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
          months.push({
            name: monthNames[month],
            weekIndex: week
          });
        }
        lastMonth = month;
      }
    }
    
    console.log('Debug - Mois générés:', months);
    return months;
  }, []);

  React.useEffect(() => {
    const fetchGitLabContributions = async () => {
      try {
        let allContributions: GitLabEvent[] = [];
        let page = 1;
        const perPage = 100;
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        // Récupération des événements GitLab
        while (true) {
          const response = await fetch(
            `https://gitlab.com/api/v4/users/erwan-delcour/events?per_page=${perPage}&page=${page}&after=${oneYearAgo.toISOString()}`,
            {
              headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_GITLAB_TOKEN}`
              }
            }
          );
          
          if (!response.ok) break;
          
          const events = await response.json();
          if (events.length === 0) break;
          
          const recentEvents = events.filter((event: GitLabEvent) => {
            const eventDate = new Date(event.created_at);
            return eventDate >= oneYearAgo;
          });
          
          allContributions.push(...recentEvents);
          
          if (events.length < perPage) break;
          page++;
          if (page > 50) break;
        }

        // Prendre tous les événements de contribution GitLab (sans filtre)
        const contributionEvents = allContributions;

        // Debug spécifique pour juillet 2025
        const julyContributions = contributionEvents.filter((event: GitLabEvent) => {
          const eventDate = new Date(event.created_at);
          return eventDate.getMonth() === 6 && eventDate.getFullYear() === 2025; // Juillet = 6
        });
        
        console.log(`Contributions GitLab en juillet 2025: ${julyContributions.length}`);
        julyContributions.forEach((event: GitLabEvent) => {
          console.log(`- ${event.created_at}: ${event.action_name}`);
        });

        setGitlabContributions(contributionEvents.length);        // Créer les données pour le calendrier unifié
        await createUnifiedCalendarData(contributionEvents);
      } catch (error) {
        console.error('Erreur lors de la récupération des contributions GitLab:', error);
        setGitlabContributions(0);
        await createUnifiedCalendarData([]);
      } finally {
        setLoading(false);
      }
    };

    const createUnifiedCalendarData = async (gitlabEvents: GitLabEvent[]) => {
      try {
        let githubEvents: any[] = [];
        const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
        const headers: any = {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-Calendar'
        };
        if (githubToken && githubToken !== 'your_github_token_here') {
          headers['Authorization'] = `Bearer ${githubToken}`;
        }
        
        // Récupérer les repos et leurs commits
        try {
          const reposResponse = await fetch(`https://api.github.com/users/erwan-delcour/repos?per_page=100&sort=updated`, { headers });
          
          if (reposResponse.ok) {
            const repos = await reposResponse.json();
            
            if (repos.length > 0) {
              const oneYearAgo = new Date();
              oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
              
              for (let i = 0; i < repos.length; i++) {
                const repo = repos[i];
                
                try {
                  // Ajouter un délai entre les appels pour éviter les limites de taux
                  if (i > 0) {
                    await new Promise(resolve => setTimeout(resolve, 300));
                  }
                  
                  const commitsResponse = await fetch(
                    `https://api.github.com/repos/${repo.full_name}/commits?since=${oneYearAgo.toISOString()}&per_page=100`,
                    { headers }
                  );
                  
                  if (commitsResponse.ok) {
                    const commits = await commitsResponse.json();
                    
                    // Prendre TOUS les commits sans filtrer par auteur
                    commits.forEach((commit: any) => {
                      githubEvents.push({
                        type: 'PushEvent',
                        created_at: commit.commit.author.date,
                        repo: { name: repo.full_name }
                      });
                    });
                  } else if (commitsResponse.status === 409) {
                    console.warn(`Conflit pour le repo ${repo.name} - probablement un repo vide ou privé`);
                  } else if (commitsResponse.status === 403) {
                    console.warn(`Limite de taux atteinte pour ${repo.name} - on continue`);
                    break; // Arrêter si on atteint la limite
                  }
                } catch (commitError) {
                  console.warn(`Erreur pour le repo ${repo.name}:`, commitError);
                }
              }
            }
          }
        } catch (repoError) {
          console.error('Erreur lors de la récupération des repos:', repoError);
        }

        // Créer un map pour compter les contributions par jour
        const dailyContributions = new Map<string, number>();
        
        // Ajouter les contributions GitLab
        gitlabEvents.forEach(event => {
          const date = new Date(event.created_at).toISOString().split('T')[0];
          dailyContributions.set(date, (dailyContributions.get(date) || 0) + 1);
        });

        // Ajouter les contributions GitHub
        githubEvents.forEach(event => {
          const date = new Date(event.created_at).toISOString().split('T')[0];
          dailyContributions.set(date, (dailyContributions.get(date) || 0) + 1);
        });

        // Convertir en format pour le calendrier
        const calendarData: DayData[] = Array.from(dailyContributions.entries()).map(([date, count]) => ({
          date,
          count
        }));

        setCombinedData(calendarData);
      } catch (error) {
        console.error('Erreur lors de la création du calendrier unifié:', error);
      }
    };

    fetchGitLabContributions();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12}>
        <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
          Calendrier des contributions <strong className="purple">Git</strong> (hors travail)
        </h1>
        
        {(() => {
          if (loading) {
            return <p style={{ color: "white", textAlign: "center" }}>Chargement du calendrier...</p>;
          } else if (combinedData.length > 0) {
            return (
              <div className="contributions-calendar-container">
                {/* Labels des mois */}
                <div className="contributions-calendar-months">
                  {generateMonthLabels().map((month, index) => (
                    <div
                      key={index}
                      className="contributions-month-label"
                      style={{
                        gridColumn: `${month.weekIndex + 1} / span 3`,
                        justifySelf: 'start'
                      }}
                    >
                      {month.name}
                    </div>
                  ))}
                </div>
                
                {/* Grille du calendrier */}
                <div className="contributions-calendar-grid">
                  {generateCalendarGrid(combinedData).map((cell, index) => (
                    <div
                      key={index}
                      title={`${cell.date}: ${cell.count} contributions`}
                      className="contributions-calendar-cell"
                      style={{
                        backgroundColor: cell.color
                      }}
                    />
                  ))}
                </div>
                <div className="contributions-legend">
                  <span>Moins</span>
                  <div className="contributions-legend-colors">
                    {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map((color, index) => (
                      <div
                        key={index}
                        className="contributions-legend-cell"
                        style={{
                          backgroundColor: color
                        }}
                      />
                    ))}
                  </div>
                  <span>Plus</span>
                </div>
                <div className="contributions-stats">
                  {combinedData.reduce((sum, day) => sum + day.count, 0)} contributions cette année
                </div>
              </div>
            );
          } else {
            return (
              <div style={{ color: "white", textAlign: "center" }}>
                <p>Aucune donnée de contribution disponible</p>
                <p style={{ fontSize: "14px", color: "#8b949e" }}>
                  Debug: {combinedData.length} éléments dans combinedData
                </p>
              </div>
            );
          }
        })()}
      </Col>
    </Row>
  );
}

export default Github;