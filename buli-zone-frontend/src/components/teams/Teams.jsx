import React from "react";
import styles from "./Teams.module.css";

export const Teams = () => {
  const teams = [
    {
      name: "FC Bayern München",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000G.svg",
    },
    {
      name: "Bayer 04 Leverkusen",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000B.svg",
    },
    {
      name: "Eintracht Frankfurt",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000F.svg",
    },
    {
      name: "RB Leipzig",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-000017.svg",
    },
    {
      name: "SC Freiburg",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000A.svg",
    },
    {
      name: "Borussia Dortmund",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-000007.svg",
    },
    { 
      name: "VfL Wolfsburg",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-000003.svg",
    },
    {
      name: "1. FC Mainz 06",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-000006.svg",
    },
    {
      name: "Borussia Möncengladbach",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000E.svg",
    },
    {
      name: "Werder Bremen",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000L.svg",
    },
    {
      name: "VfB Stuttgart",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000D.svg",
    },
    {
      name: "FC Augsburg",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000H.svg",
    },
    {
      name: "TSG Hoffenheim",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-000002.svg",
    },
    {
      name: "1. FC Union Berlin",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000I.svg",
    },
    {
      name: "VfL Bochum",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000J.svg",
    },
    {
      name: "Holstein Kiel",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000M.svg",
    },
    {
      name: "1. FC Heidenheim",
      logo: "https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000N.svg",
    },
    {
        name: "+",
        logo: "https://www.svgrepo.com/show/505732/plus-small.svg",
    }
  ];

  return (
    <section id="teams" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Teams</h2>
        <div className={styles["hexagon-wrapper"]}>
          <div className={styles["hexagon-wrapper__hexagon-container"]}>
            {teams.map((team, index) => (
              <div key={index} className={styles["hexagon__outer"]}>
                <div className={styles["hexagon__inner"]}>
                  <a href={team.name}><img src={team.logo} alt={team.name} className={styles.clubImg}/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
