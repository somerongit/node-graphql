const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql')
const DB = require('./DB')
const BookType = require('./BookType')
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a author of a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return DB.books.filter(book => book.authorId === author.id)
            }
        }
    })
})
module.exports[AuthorType]