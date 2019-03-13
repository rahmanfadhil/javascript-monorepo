import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import { Model } from 'objection'
import knex from 'knex'

import databaseConfig from '../knexfile'
import schema from './schema'
import { corsConfig, playgroundConfig } from './configs'

function bootstrap() {
  const database = knex(databaseConfig[process.env.NODE_ENV])
  Model.knex(database)
  const app = express()
  app.use(cookieParser())
  const server = new ApolloServer({ schema, playground: playgroundConfig })
  server.applyMiddleware({ app, cors: corsConfig })
  app.listen(4000, () => console.log('> Started at http://localhost:4000'))
}

bootstrap()
