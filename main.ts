// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API !");
});

app.get("/linhdeptrai", (req, res) => {
  res.send("Deno with Linh đẹp trai vcl!");
});

app.listen(8000);

console.log("Server listening on port 8000");
