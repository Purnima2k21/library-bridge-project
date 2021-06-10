package com.launchacademy.library.controllers;

import com.launchacademy.library.models.Book;
import com.launchacademy.library.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/books")
public class BooksRestController {

    private BookService bookService;

    @Autowired
    public BooksRestController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> listAllBooks() {
        return bookService.findAll();
    }

    @GetMapping ("/{id}")
    public Book showBook(@PathVariable Integer id) {
        return bookService.findById(id);
    }

   @PostMapping
    public ResponseEntity saveBook(@Valid @RequestBody Map<String, String> book, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity <List> (bindingResult.getAllErrors(), HttpStatus.NOT_ACCEPTABLE);
     } else {
            return new ResponseEntity<Book>(bookService.save(book), HttpStatus.CREATED);
       }
    }

}
