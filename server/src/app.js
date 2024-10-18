import express, { json } from "express";
import cors from "cors";
import todoRoutes from "./router/todo.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
