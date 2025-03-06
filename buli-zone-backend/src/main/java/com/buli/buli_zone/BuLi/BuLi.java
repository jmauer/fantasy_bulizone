package com.buli.buli_zone.BuLi;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "buli_data")
public class BuLi {
    
    @Id
    @Column(name = "id", unique = true)
    private Integer id;
    private Integer rank;
    private String name;
    private Integer matches;
    private Integer wins;
    private Integer draws;
    private Integer losses;
    private String goals;
    private Integer difference;
    private Integer points;

    public BuLi() {
    }

    public BuLi(Integer id, Integer rank, String name, Integer matches, Integer wins, Integer draws, Integer losses, String goals, Integer difference, Integer points) {
        this.id = id;
        this.rank = rank;
        this.name = name;
        this.matches = matches;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
        this.goals = goals;
        this.difference = difference;
        this.points = points;
    }

    public BuLi(Integer id) {
        this.id = id;
    }

    //getter and setter
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }  

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getMatches() {
        return matches;
    }

    public void setMatches(Integer matches) {
        this.matches = matches;
    }

    public Integer getWins() {
        return wins;
    }

    public void setWins(Integer wins) {
        this.wins = wins;
    }

    public Integer getDraws() {
        return draws;
    }

    public void setDraws(Integer draws) {
        this.draws = draws;
    }

    public Integer getLosses() {
        return losses;
    }

    public void setLosses(Integer losses) {
        this.losses = losses;
    }

    public String getGoals() {
        return goals;
    }

    public void setGoals(String goals) {
        this.goals = goals;
    }

    public Integer getDifference() {
        return difference;
    }

    public void setDifference(Integer difference) {
        this.difference = difference;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }


}
