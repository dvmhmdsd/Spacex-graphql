const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();


// allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
});