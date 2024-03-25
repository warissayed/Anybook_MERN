import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (request, response) => {
  console.log("request received");
  return response.status(234).send("<h1>this is the test</h1>");
});

app.listen(PORT, () => {
  console.log(`"app is listening :"${PORT}`);
});
