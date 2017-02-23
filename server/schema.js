var {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLID
} = require( "graphql");

const typeDefinitions = `
type Task {
  _id: String
  name: String
  status: String
}
type RootQuery {
  tasks(name: String, status: String): Task
  allTask: [Task]
}
type RootMutation {
  postNewTask(name: String,status: String): Task
  updateTask(_id:ID, name: String,status: String): Task
  deleteTask(_id:ID):Task
}
schema {
  query: RootQuery
  mutation: RootMutation
}

`;

module.exports = typeDefinitions;
