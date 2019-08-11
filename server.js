const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONDO_URI, {
        userNewUrlParser: true
    }).then(() => console.log('DB connected'))
    .catch(err => console.error(err))

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server Listening on ${url} `)
});