import { IUser } from "../../../domain/entities/users.entity"
import { IUsersRepository } from "../../../domain/respositories/users.repository"
import Users from "../models/users.model"

class UsersRepository implements IUsersRepository {
  async findAll() {
    try {
      const user = await Users.findAll()
      return [user, null] as [IUser[], null]
    } catch (e) {
      console.error(e)
      return [null, e] as [null, Error]
    }
  }

  async findById(id: number) {
    try {
      const user = await Users.findByPk(id)
      return [user, null] as [IUser, null]
    } catch (e) {
      console.error(e)
      return [null, e] as [null, Error]
    }
  }

  async create(userData: IUser) {
    try {
      const user = await Users.create(<any>userData)
      return [user, null] as [IUser, null]
    } catch (e) {
      console.error(e)
      return [null, e] as [null, Error]
    }
  }
}

export const UsersRepositoryIns = new UsersRepository()
