import { ApolloServer, gql } from 'apollo-server'

interface SystemEncounter {
  title: string
  description?: string
  avoidable: boolean
}

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type SystemEncounter {
    title: String
    description: String
    avoidable: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    systemEncounter: [SystemEncounter]
  }
`;

// Data Set
const systemEncounters: SystemEncounter[] = [
  {
    title: 'Alien Derelict (possible salvage)',
    description: '',
    avoidable: true
  },
  {
    title: 'Solar Flare',
    description: '1d6 100 rads',
    avoidable: false
  },
  {
    title: 'Asteroid (empty rock)',
    description: '',
    avoidable: true
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    systemEncounter: (modifier: number): SystemEncounter[] => {
      console.log(modifier)
      return systemEncounters
    }
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
