package com.buli.buli_zone.BuLi;

import java.lang.classfile.ClassFile.Option;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface BuLiRepository extends JpaRepository<BuLi, Integer> {

    void deleteByName(String teamName);
    Optional<BuLi> findByName(String teamName);
}
