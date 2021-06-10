package com.launchacademy.library.services;

import com.launchacademy.library.models.Book;
import com.launchacademy.library.repositories.BookRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
        return bookRepo.findById(id).orElseThrow(()-> new BookNotFoundException());
    }

    //public void addToList(Book book) {
       // bookRepo.save(book);
    //}

    public Book save (Map<String, String> book) {
        Book newBook = new Book();
        newBook.setTitle(book.get("title"));
        newBook.setAuthor(book.get("author"));
        newBook.setGenre(book.get("genre"));
        newBook.setTotalPages(Integer.parseInt(book.get("totalPages")));
        newBook.setIsbn(book.get("isbn"));
        newBook.setRating(Integer.parseInt(book.get("rating")));

        return bookRepo.save(newBook);

    }
    @NoArgsConstructor
    private class BookNotFoundException extends RuntimeException {
    }

    @ControllerAdvice
    private class BookNotFoundAdvice {
        @ResponseBody
        @ExceptionHandler(BookNotFoundException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        String bookNotFoundHandler(BookNotFoundException ex){
            return ex.getMessage();
        }
    }

}
