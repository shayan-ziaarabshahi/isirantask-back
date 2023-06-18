import express from "express";
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "./controllers.js";

const router = express.Router();

router.route("/users").get(getUsers);

router
  .route("/user")
  .get(getUser)
  .post(addUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
