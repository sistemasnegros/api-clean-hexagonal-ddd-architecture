import { Table, Column, Model } from "sequelize-typescript"
import { IUser } from "../../../domain/entities/users.entity"

type IUserModel = Omit<IUser, "id">

@Table
export default class Users extends Model implements IUserModel {
  @Column
  username: string
  @Column
  password: string
  @Column
  firstName: string
  @Column
  lastName: string
}
