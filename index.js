import express, { response } from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";

const app = express();
const PORT = 5000;
//Initialize the bodyparser middleware
app.use(bodyParser.json());

//Using the usersRoute to get the information from that route
app.use("/users", usersRoute);

app.get("/", (request, response) => {
  console.log("[TEST request]!");
  response.send(
    `Hello, this is Anatu Green's API response. The date is ${new Date()}`
  );
});

app.listen(PORT, () =>
  console.log(`Server Now Running on port: http://localhost:${PORT} `)
);
