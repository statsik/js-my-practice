const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    rating: 4.8,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 5.99,
    rating: 4.9,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    rating: 4.8,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 9.99,
    rating: 4.5,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical',
    price: 14.99,
    rating: 4.9,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical',
    price: 11.99,
    rating: 4.8,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    genre: 'Philosophical',
    price: 13.99,
    rating: 4.9,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genre: 'Dystopian',
    price: 9.99,
    rating: 4.7,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Romance',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    genre: 'Romance',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Gothic',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Science Fiction',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Horror',
    price: 6.99,
    rating: 4.5,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    year: -800,
    genre: 'Epic',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    year: -750,
    genre: 'Epic',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Historical',
    price: 11.99,
    rating: 4.9,
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    genre: 'Adventure',
    price: 12.99,
    rating: 4.9,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.6,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'Historical',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'Children',
    price: 6.99,
    rating: 4.7,
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1877,
    genre: 'Romance',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'Mystery',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    price: 20.99,
    rating: 4.9,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
];

//Task-1
// const getName = (books) => {
//     const getNames = [];
//     for (const nam of books) {
//         getNames.push(nam.title);
//     }
//     return getNames;
// }
// console.log(getName(books));

//Task-2
// const getAuthor = (books) => {
//     const getAuthors = [];
//     for (const auth of books) {
//         getAuthors.push(auth.author);
//     }
//     return getAuthors;
// }
// console.log(getAuthor(books));

//Task-3
// const getAuthorAndName = (books) => {
//     const getArray = [];
//     for (const book of books) {
//         getArray.push({ title: book.title , author: book.author });
//     }
//     return getArray;
// }
// console.log(getAuthorAndName(books));

//Task-4
// const getPrice = (books) => {
//     const doublePrice = [];
//     let newP = 0;
//     for (const newPrice of books) {
//         newP = newPrice.price * 2;
//         doublePrice.push(newP);
//     }
//     return doublePrice;
// }
// console.log(getPrice(books));

//Task-5
// const getAddedAge = (books) => {
//     const newArray = [];
//     let newA = 0;
//     for (const newYear of books) {
//         newA = newYear.year + 5;
//         newArray.push(newA);
//     }
//     return newArray;
// }
// console.log(getAddedAge(books));

//Task-6
// const getNewRatting = () => {
//     const newArray = [];
//     let newRat = 0;
//     for (const value of books) {
//         newRat = value.rating * 10;
//         newArray.push({ title: value.title, rating: newRat });
//     }
//     return newArray;
// }
// console.log(getNewRatting(books));

//Task-7
// const titleToUpper = () => {
//     const newArray = [];
//     for (const value of books) {
//         value.title = value.title.toUpperCase();
//         newArray.push(value);
//     }
//     return newArray;
// }
// console.log(titleToUpper(books));

//Task-8
// const getAuthorAndName = () => {
//     const getArray = [];
//     for (const book of books) {
//         getArray.push({ title: book.title , author: book.author });
//     }
//     return getArray;
// }
// console.log(getAuthorAndName(books));

//Task-9
// const addDiscPrice = () => {
//     const newArray = [];
//     for (const value of books) {
//         value.discountPrice = value.price * 0.9;
//         newArray.push(value);
//     }
//     return newArray;
// }
// console.log(addDiscPrice(books));

//Task-10
// const addPrice = () => {
//     const newArray = [];
//     for (const value of books) {
//         value.price = value.price + value.price * 0.15;
//         newArray.push(value);
//     }
//     return newArray;
// }
// console.log(addPrice(books));

//Task-11
// const booksAfterTwo = (books) => {
//     return books.filter(book => book.year > 2000);
// }
// console.log(booksAfterTwo(books));

//Task-12
// const newConst = () => {
//     const newArray = [];
//     for (const value of books) {
//         if (value.year < 1950) {
//             value.isClassic = true;
//         } else value.isClassic = false;
//         newArray.push(value);
//     }
//     return newArray;
// }
// console.log(newConst(books));