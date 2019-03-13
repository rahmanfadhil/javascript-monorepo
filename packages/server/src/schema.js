import { makeExecutableSchema } from 'graphql-tools'
import gql from 'graphql-tag'
import merge from 'lodash/merge'

import userTypes from './modules/users/typeDefs'
import userResolvers from './modules/users/resolvers'

const baseTypes = gql`
  scalar DateTime

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

const typeDefs = [baseTypes, userTypes]
const resolvers = merge(userResolvers)

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
