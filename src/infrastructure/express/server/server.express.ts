import express from "express"
import "../../sequelize/config.sequelize"
import { UsersController } from "../controllers/users.controller"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
const port = 3000

app.get("/", (_, res) => {
  res.send("API Clean Hexagonal DDD Architecture")
})

app.use("/users", UsersController)

app.listen(port, () => {
  console.log("Run server....", port)
})
