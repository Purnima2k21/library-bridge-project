package com.launchacademy.library.repositories;

import com.launchacademy.library.models.Book;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends PagingAndSortingRepository <Book, Integer> {
}
