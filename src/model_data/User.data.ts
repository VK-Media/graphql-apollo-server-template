import User from '../db/models/User.model'
import { UserInputError } from 'apollo-server'

interface UserData {
	name: string
	email: string
	password: string
}

export default {
	getAll: async () => {
		return await User.find()
	},
	getUserById: async id => {
		return await User.findOne({ _id: id })
	},
	createUser: async (input: UserData) => {
		try {
			const user = new User(input)
			const token = await user.generateAuthToken()
			await user.save()
			return {
				user,
				token
			}
		} catch (error) {
			throw new UserInputError(error.message)
		}
	}
}