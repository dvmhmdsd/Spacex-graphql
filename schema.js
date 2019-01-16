const axios = require('axios');
const {GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');

// Launch type
let LanchType = new GraphQLObjectType({
    name: "Launch",
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
let RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString}
    })
});

let RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: GraphQLList(LanchType),
            resolve(parents, args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});