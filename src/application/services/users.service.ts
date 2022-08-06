import { IUser } from "../../domain/entities/users.entity"
import { IUsersRepository } from "../../domain/respositories/users.repository"
import { UsersRepositoryIns } from "../../infrastructure/sequelize/respositories/users.repository"

class UsersService {
  _repository: IUsersRepository
  constructor(repository: IUsersRepository) {
    this._repository = repository
  }

  async findAll() {
    const [users, err] = await this._repository.findAll()
    if (err) {
      return { code: 500, data: "error getting users " }
    }

    return { code: 201, data: users }
  }

  async findById(id: number) {
    const [user, err] = await this._repository.findById(id)
    if (err) {
      return { code: 500, data: "error getting the user" }
    }

    if (!user) {
      return { code: 404, data: "user not found" }
    }

    return { code: 201, data: user }
  }

  async create(userData: IUser) {
    const [user, err] = await this._repository.create(userData)

    if (err) {
      return { code: 500, data: "error creating the user" }
    }
    return { code: 201, data: user }
  }
}

// Inject Repository
export const UsersServiceIns = new UsersService(UsersRepositoryIns)
