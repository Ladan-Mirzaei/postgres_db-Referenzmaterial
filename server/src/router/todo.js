import { Router } from "express";
import { getTodos } from "../controllers/todo.js";

const router = Router();
router.get("/", getTodos);

export default router;
