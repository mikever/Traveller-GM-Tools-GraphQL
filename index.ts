import { ApolloServer, gql } from 'apollo-server'

interface SystemEncounter {
  title: string
  description?: string
  avoidable: boolean
}

// Data Set: pull this in from elsewhere
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

// params: object with schema definition, set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
