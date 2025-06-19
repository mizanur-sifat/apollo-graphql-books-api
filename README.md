# Apollo GraphQL Books API
A simple GraphQL API built using Apollo Server and Node.js that allows you to fetch a list of books or retrieve a book by its ID.

## Features
- Get a list of books  
- Get details of a specific book by ID  
- Easy to set up and run  
- Clean and minimal code structure  

## Getting Started

### Prerequisites
- Node.js & npm installed on your machine

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/apollo-graphql-books-api.git  
   cd apollo-graphql-books-api

2. Install dependencies:
   npm install

3. Start the server:
   node index.js

The server will start at:
http://localhost:400/

You can access the GraphQL Playground in your browser at that address.

## Example Queries

### Get all books
query {
  books {
    id
    title
    author
  }
}

### Get a book by ID
query {
  book(id: "1") {
    title
    author
  }
}

## Project Structure
apollo-graphql-books-api/
├── index.js          # Main server file  
├── package.json      # Project configuration and dependencies  
└── README.md         # Project documentation

## Built With
- Node.js  
- Apollo Server  
- GraphQL  




