const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();


// allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('public'));

/* app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}); */


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
});