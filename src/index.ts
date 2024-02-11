import express from "express";
import { Request, Response } from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req: Request, res: any) => {
  res.send("This is default route");
});

app.post("/deploy", async (req: any, res: any) => {
  console.log(req.body);
  res.send(`${req.body} this is response from server`);
});

app.listen(port, () => {
  console.log("Server is running on - http://localhost:3000");
});
