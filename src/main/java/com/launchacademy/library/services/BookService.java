package com.launchacademy.library.services;

import com.launchacademy.library.models.Book;
import com.launchacademy.library.repositories.BookRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class BookService {
    private BookRepository bookRepo;

    @Autowired
    public BookService(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }

    public List<Book> findAll() {
        return (List<Book>) bookRepo.findAll();
    }

    public Book findById(@PathVariable Integer id) {
        return bookRepo.findById(id).orElseThrow(() -> new BookNotFoundException());
    }

    public Book save(Book book) {
        return bookRepo.save(book);
    }

    @NoArgsConstructor
    private class BookNotFoundException extends RuntimeException {
    }

    @ControllerAdvice
    private class BookNotFoundAdvice {
        @ResponseBody
        @ExceptionHandler(BookNotFoundException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        String bookNotFoundHandler(BookNotFoundException ex) {
            return ex.getMessage();
        }
    }
}
