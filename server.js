const express = require('express')
const {
    GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull
} = require('graphql')
const expressGraphQL = require('express-graphql')
const app = express()

const authors = [
    { id: 1, name: 'Rabindranath Tagore' },
    { id: 2, name: 'Bankim Chandra Chatterjee' },
    { id: 3, name: 'Ishwar Chandra Vidyasagar' },
    { id: 4, name: 'APJ Abdul Kalam' }
]

const books = [
    { id: 1, name: 'Gitanjali', authorId: 1 },
    { id: 2, name: 'Kabuliwala', authorId: 1 },
    { id: 3, name: 'The Broken Nest', authorId: 1 },
    { id: 4, name: 'Wings of fire ', authorId: 4 },
    { id: 5, name: 'Introduction to Sanskrit Grammar in Bengali', authorId: 3 },
    { id: 6, name: 'A Discourse on the Sanskrit Language and Literature', authorId: 3 },
    { id: 7, name: 'Rajmohan\'s Wife: A Novel', authorId: 2 },
    { id: 8, name: 'Devi Chaudhurani', authorId: 2 }
]

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'SomeronBakuli',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Someron Bakuli'
            }
        })
    })
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log('Server is live at port 5000');
})