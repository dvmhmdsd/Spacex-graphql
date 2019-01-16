const axios = require('axios');
const {GraphQLOpjectType, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');

// Launch type
let LanchType = new GraphQLOpjectType({
    name: "Lanch",
    fields: () => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        rocket: {type: RocketType}
    })
});

// Rocket type
let RocketType = new GraphQLOpjectType({
    name: "Rocket",
    fields: () => ({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString}
    })
});

let RootQuery = new GraphQLOpjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: GraphQLList(LanchType),
            resolve(parents, args) {
                axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});