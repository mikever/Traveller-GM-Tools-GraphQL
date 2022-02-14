"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  # This \"Book\" type defines the queryable fields for every book in our data source.\n  type SystemEncounter {\n    title: String\n    description: String\n    avoidable: Boolean\n  }\n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n    systemEncounter: [SystemEncounter]\n  }\n"], ["\n  # This \"Book\" type defines the queryable fields for every book in our data source.\n  type SystemEncounter {\n    title: String\n    description: String\n    avoidable: Boolean\n  }\n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n    systemEncounter: [SystemEncounter]\n  }\n"])));
// Data Set
var systemEncounters = [
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
var resolvers = {
    Query: {
        systemEncounter: function (modifier) {
            console.log(modifier);
            return systemEncounters;
        }
    }
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
// The `listen` method launches a web server.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at ".concat(url));
});
var templateObject_1;
