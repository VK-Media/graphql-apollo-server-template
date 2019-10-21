import * as path from 'path'
import { fileLoader } from 'merge-graphql-schemas'

const resolvers = fileLoader(path.join(__dirname, '../graphql/**/*.resolvers.ts'))

export default resolvers