package com.zelish.repository;

import com.zelish.domain.Country;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data MongoDB repository for the Country entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CountryRepository extends MongoRepository<Country, String> {

}
