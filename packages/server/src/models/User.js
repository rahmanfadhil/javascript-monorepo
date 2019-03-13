import BaseModel from '../utils/objects/BaseModel'

export default class User extends BaseModel {
  static tableName = 'users'
  static jsonSchema = {
    type: 'object',
    properties: {
      is_admin: { type: 'boolean', default: false },
      is_verified: { type: 'boolean', default: false },
    },
  }
}
