const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql')
const DB = require('./DB')
const AuthorType = require('./AuthorType')
const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return DB.authors.find(author => author.id === book.authorId)
            }
        }
    })
})
module.exports[BookType]