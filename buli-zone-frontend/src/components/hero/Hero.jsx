import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [data, setData] = useState([]);

  function addTeam() {
    fetch("http://localhost:8080/api/v1/buli", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 19,
        rank: 20,
        name: "Random Team",
        matches: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goals: "0:0",
        difference: 0,
        points: 0,
      }),
    }).then((response) => response.json());
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/buli")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="table" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Tabelle</h1>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <th>Platz</th>
              <th>Team</th>
              <th>Spiele</th>
              <th>S</th>
              <th>U</th>
              <th>N</th>
              <th>Tore</th>
              <th>D</th>
              <th>Punkte</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((team) => (
                <tr
                  key={team.id}
                  className={styles.tableRow}
                  onClick={() => (window.location.href = `/${team.name}`)}
                >
                  <td>{team.rank}</td>
                  <td>{team.name}</td>
                  <td>{team.matches}</td>
                  <td>{team.wins}</td>
                  <td>{team.draws}</td>
                  <td>{team.losses}</td>
                  <td>{team.goals}</td>
                  <td>{team.difference}</td>
                  <td>{team.points}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="border px-4 py-2 text-center">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button onClick={() => addTeam()} className={styles.addBtn}>
          Random Team hinzufügen
        </button>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
