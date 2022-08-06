import { IUser } from "../entities/users.entity"

// get one user
type result = [IUser | null, Error | null]
// get many users
type results = [IUser[] | null, Error | null]

export interface IUsersRepository {
  findAll: () => Promise<results>
  findById: (id: number) => Promise<result>
  create: (user: any) => Promise<result>
}
