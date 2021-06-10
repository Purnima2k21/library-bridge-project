DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR (200) NOT NULL,
  author VARCHAR (200) NOT NULL,
  genre VARCHAR (50) NOT NULL,
  total_pages INTEGER NOT NULL,
  isbn VARCHAR (13) NOT NULL,
  rating INTEGER
);

INSERT INTO books(title, author, genre, total_pages, isbn, rating) VALUES ('War And Peace', 'Leo Tolstoy', 'Novel', 1225, '9789295055025', 1 );
INSERT INTO books(title, author, genre, total_pages, isbn, rating) VALUES ('The Alchemist', 'Paulo Coelho', 'Fantasy Fiction', 208, '1209295055065', 10 );
INSERT INTO books(title, author, genre, total_pages, isbn, rating) VALUES ('Bossypants', 'Tina Fey', 'Comedy', 150, '4356457896578', 90 );
INSERT INTO books(title, author, genre, total_pages, isbn, rating) VALUES ('Bloodlands', 'Timothy Snyder', 'History', 544, '9780465002399', 25 );
INSERT INTO books(title, author, genre, total_pages, isbn, rating) VALUES ('Long Walk to Freedom', 'Nelson Mandela', 'Autobiography', 630, '3160874955065', 3 );

