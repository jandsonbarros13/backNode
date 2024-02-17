import express from "express";
import bodyParser from "body-parser";
import userController from "./controllers/user";

const app = express();
const port = 3000;

app.use(bodyParser)

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post('/user', userController)
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
