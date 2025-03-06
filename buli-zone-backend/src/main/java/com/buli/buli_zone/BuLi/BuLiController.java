package com.buli.buli_zone.BuLi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping(path = "/api/v1/buli")
@CrossOrigin(origins = "http://localhost:5173")
public class BuLiController {
    
    private final BuLiService buLiService;

    @Autowired
    public BuLiController(BuLiService buLiService) {
        this.buLiService = buLiService;
    }

    @GetMapping
    public List<BuLi> getBuLiTeams(
        @RequestParam(required = false) Integer rank,
        @RequestParam(required = false) String name) {

        if (rank != null) {
            return buLiService.getTeamByRank(rank);
        } else if (name != null) {
            return buLiService.getTeamByName(name);
        } else {
            return buLiService.getBuLiStats();
        }
    }

    @PostMapping
    public ResponseEntity<BuLi> addTeam(@RequestBody BuLi team) {
        if (team == null) {
            System.out.println(team);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        BuLi createTeam = buLiService.addTeam(team);
        return new ResponseEntity<>(createTeam, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<BuLi> updateTeam(@RequestBody BuLi team) {
        BuLi resultTeam = buLiService.updateTeam(team);
        if (resultTeam != null) {
            return new ResponseEntity<>(resultTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping("/{teamName}")
    public ResponseEntity<String> deleteTeam(@PathVariable String teamName) {
        buLiService.deleteTeamByName(teamName);
        return new ResponseEntity<>("Team deleted successfully", HttpStatus.OK);
    }
    
}
