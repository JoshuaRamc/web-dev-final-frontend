import React from 'react';

function Home() {
  // Sample book data
  const books = [
    { title: 'Harry Potter and the Sorcerer Stone', author: 'J.K Rowling', imageUrl: '../Harry_Potter.jpg' },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', imageUrl: '../farenheit.jpg' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', imageUrl: '../mockingbird.jpeg' },
    { title: '1984', author: 'George Orwell', imageUrl: '../1984.jpg' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', imageUrl: '../great.jpg' },
  ];

  return (
    <>
      <style>
        {`
          /* Reset some default styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body, #root {
            height: 100%;
          }

          body {
            font-family: 'Roboto', sans-serif;
            background-image: url('../background_books.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
            margin: 0;
            color: #ff9933;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* Set minimum height to make sure the content covers the whole viewport */
            position: relative;
          }

          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.6); /* Adjust the alpha value for transparency */
            z-index: -1;
          }

          header {
            background-color: #ff9933;
            color: black;
            padding: 20px;
            text-align: center;
          }

          #hero-section {
            color: black;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          #hero-section h1 {
            margin-bottom: 20px;
            font-size: 4em;
          }

          #hero-section p {
            font-size: 1.5em;
          }

          #featured-books {
            text-align: center;
            margin-top: 0px;
            padding: 50px 20px;
            color: black;
          }

          #featured-books h1 {
            font-size: 4em;
            color: black;
          }

          .book-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .book-card {
            flex: 0 0 calc(33.333% - 20px);
            margin: 10px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
            background-color: #fff;
            position: relative;
          }

          .book-card:hover {
            transform: scale(1.05);
          }

          .book-card img {
            width: 400px;
            height: 400px;
            border-bottom: 1px solid #ddd;
            border-radius: 8px 8px 0 0;
          }

          .book-details {
            padding: 15px;
          }

          #additional-content {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 50px 20px;
            margin-bottom: auto; /* Push above the footer */
          }

          footer {
            background-color: #ff9933;
            color: black;
            text-align: center;
            padding: 20px;
            margin-top: auto; /* Push to the bottom */
          }
        `}
      </style>

      <div className="home-container">
        <header>
          <h1>Word On The Street</h1>
        </header>

        <section id="hero-section">
          <h1>Welcome to the Book Haven</h1>
          <p>Immerse yourself in a literary wonderland where the pages of your favorite books come alive through vibrant discussions and engaging conversations.</p>
        </section>

        <section id="featured-books">
          <h2>Featured Books</h2>

          {/* Create book cards */}
          <div className="book-container">
            {books.map((book, index) => (
              <div key={index} className="book-card">
                <div className="book-card-overlay"></div>
                <img src={book.imageUrl} alt={`${book.title} by ${book.author}`} />
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="additional-content">
          <h2>Discover More!</h2>
          <p>Explore our forums, join book discussions, and be part of a community passionate about literature. Your next literary adventure awaits!</p>
        </section>

        <footer>
          <p>&copy; 2023 Word on the Street. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
