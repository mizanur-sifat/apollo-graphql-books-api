const { ApolloServer, gql } = require('apollo-server');

// Sample data
const books = [
    { id: '1', title: '1984', author: 'George Orwell' },
    { id: '2', title: 'Brave New World', author: 'Aldous Huxley' },
];

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }
    
    type Query {
        books: [Book!]!
        book(id:ID!): Book
    }
`;

// Resolvers (logical code)
const resolvers = {
    Query: {
        books: () => books,
        book: (_, args) => books.find(book => book.id === args.id)
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port:400 }).then(({ url }) => {
    console.log(`Server ready at ${url}`)
});