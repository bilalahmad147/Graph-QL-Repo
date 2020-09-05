const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }
  
type Query {
    Students: [Student]
  }
`;

const Students = [
    {
        id: 1,
        name: "Bilal",
        email: "bilal@gmail.com",
        age: 12,
    },
    {
        id: 2,
        name: "ali",
        email: "ali@gmail.com",
        age: 12,
    },
    {
        id: 3,
        name: "abc",
        email: "abc@gmail.com",
        age: 12,
    },
];

const resolvers = {
    Query: {
      Students: () => Students,
    },
  };


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});