import User from '../../models/User'

export default {
  Query: {
    users: () => User.query(),
  },
}
