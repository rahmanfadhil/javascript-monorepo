import gql from 'graphql-tag'

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    password: String!
    is_admin: Boolean!
    is_verified: Boolean!
    created_at: DateTime!
    updated_at: DateTime!
  }

  input UpdateUserMutationInput {
    name: String
    email: String
    phone: String
    password: String
  }

  input RegisterMutationInput {
    name: String!
    email: String!
    phone: String!
    password: String!
  }

  input LoginMutationInput {
    name: String!
    password: String!
  }

  extend type Query {
    users: [User!]!
  }
`
