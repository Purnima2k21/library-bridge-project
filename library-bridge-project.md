# Launch Library Bridge Project

Launch Academy is opening up a brand new library and we need your help to build the website!

## Getting Started

```no-highlight
createdb launch_library
et get library-bridge-project
cd library-bridge-project/src/main/frontend
yarn install
```

- There is an empty `V1.0.0__init.sql` migration included, so that spring boot can run initially without erroring out do to an empty migrations folder.

- From `src/main/frontend` running `yarn run dev:client` will start the webpack-dev-server to load our react.
- The spring-boot server can be started from IntelliJ or the terminal at the root with the `./mvnw spring-boot:run` command.

## User Stories

### List of Books

```no-highlight
As a visitor on the website
I would like to see a list of the books in the library
so that I can find a book I may be interested in reading
```

- Create a `books` table, that should have a title, author, genre, total_pages, isbn and rating column.
- Each book must have a title, author, genre, total_pages and isbn. The rating is optional.
  - `title`: A string with a max length of 200 characters
  - `author`: A string with a max length of 200 characters
  - `genre`: A string with a max length of 50 characters
  - `total_pages`: An integer that must be greater than or equal to 1.
  - `isbn`: A string of 13 digits. It must be exactly 13 characters.
  - `rating`: An integer that can range from 0 to 100.
- If I navigate to `/books`, I should see a list of all the books in the database.
- The `title` of each book should be displayed on the page.

### Book Show Page

```no-highlight
As a visitor on the website
I would like to see more information about specific books
so that I can decide if it is a book worth reading
```

- If I navigate to `books/{id}`, I should see all the information about the book with an id of `{id}`.
- I should see the title, author, genre, total_pages and isbn number.
- If a `rating` is present, then it should be displayed on the page as well.
- I should also be able to navigate to a books show page from the `/books` path.
  - Each books `title` that is being displayed should be a link to it's respective `books/{id}` show page.

### Donating a Book

```no-highlight
As a supporter of the library
I would like to be able to donate my books
so that the library will stay well stocked
```

- If I navigate to `/books/new`, there should be a form to donate a book.
- I should be able to enter the title, author, genre, total pages, isbn and rating.
- After a successful form submission I should be redirected to `/books` where the donated books title should be showing.
- If I submit a form that has not been properly filled out, I should stay on `/books/new` and see errors providing feedback about what went wrong.
- On the books index page (`/books`), there should be a link to `Donate a Book!` that will take a user to `/books/new`.
