package com.zelish.service.impl;

import com.zelish.service.CountryService;
import com.zelish.domain.Country;
import com.zelish.repository.CountryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Country}.
 */
@Service
public class CountryServiceImpl implements CountryService {

    private final Logger log = LoggerFactory.getLogger(CountryServiceImpl.class);

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    /**
     * Save a country.
     *
     * @param country the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Country save(Country country) {
        log.debug("Request to save Country : {}", country);
        return countryRepository.save(country);
    }

    /**
     * Get all the countries.
     *
     * @return the list of entities.
     */
    @Override
    public List<Country> findAll() {
        log.debug("Request to get all Countries");
        return countryRepository.findAll();
    }


    /**
     * Get one country by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    public Optional<Country> findOne(String id) {
        log.debug("Request to get Country : {}", id);
        return countryRepository.findById(id);
    }

    /**
     * Delete the country by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(String id) {
        log.debug("Request to delete Country : {}", id);
        countryRepository.deleteById(id);
    }
}
