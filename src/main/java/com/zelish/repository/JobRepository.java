package com.zelish.repository;

import com.zelish.domain.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data MongoDB repository for the Job entity.
 */
@Repository
public interface JobRepository extends MongoRepository<Job, String> {

    @Query("{}")
    Page<Job> findAllWithEagerRelationships(Pageable pageable);

    @Query("{}")
    List<Job> findAllWithEagerRelationships();

    @Query("{'id': ?0}")
    Optional<Job> findOneWithEagerRelationships(String id);

}
