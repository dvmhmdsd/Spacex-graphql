const {GraphQLOpjectType, GraphQLInt, GraphQLBoolean, GraphQLString} = require('graphql');

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