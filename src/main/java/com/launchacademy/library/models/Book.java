package com.launchacademy.library.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;


@Entity
@Table(name = "books")
@NoArgsConstructor
@Getter
@Setter
public class Book {
    @Id
    @SequenceGenerator(name = "book_generator", sequenceName = "books_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_generator")
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    @NotNull(message = "Please enter the title of the book" )
    @Size(max=200)
    @Column(name = "title", nullable = false)
    private String title;

    @NotNull(message = "Please enter the name of the author")
    @Size(max=200)
    @Column(name = "author", nullable = false)
    private String author;

    @NotNull(message = "Please enter the genre of the book")
    @Size(max=50)
    @Column(name = "genre", nullable = false)
    private String genre;

    @NotNull(message = "Please enter the total number of pages")
    @Positive
    @Column( name = "total_pages", nullable = false)
    private Integer totalPages;

    @NotNull(message = "Please enter the isbn number")
    @Pattern(regexp="[\\d]{13}")

    //@Digits
    @Column(name = "isbn", nullable = false)
    private String isbn;

    @Column(name = "rating")
    private Integer rating;
}

