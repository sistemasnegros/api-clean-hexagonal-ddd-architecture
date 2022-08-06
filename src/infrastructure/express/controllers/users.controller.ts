import express from "express"
import { UsersServiceIns } from "../../../application/services/users.service"

export const UsersController = express.Router()

UsersController.get("/", async (req, res) => {
  const { code, data } = await UsersServiceIns.findAll()
  return res.status(code).json(data)
})

UsersController.get("/:id", async (req, res) => {
  const { code, data } = await UsersServiceIns.findById(+req.params.id)
  return res.status(code).json(data)
})

UsersController.post("/", async (req, res) => {
  const { code, data } = await UsersServiceIns.create(req.body)
  return res.status(code).json(data)
})
