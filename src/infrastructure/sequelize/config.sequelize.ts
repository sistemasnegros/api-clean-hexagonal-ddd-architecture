import { Sequelize } from "sequelize-typescript"

export const sequelizeIns = new Sequelize({
  dialect: "sqlite",
  models: [__dirname + "/models"],
  storage: __dirname + "/../../../db/app.db.sqlite",
  logging: false,
})

;(async () => {
  await sequelizeIns.sync({ alter: true })
  console.log("Model Sync......")
})()
