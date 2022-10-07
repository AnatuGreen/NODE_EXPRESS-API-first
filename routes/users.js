import express from "express";
//Initialize Router from express
const router = express.Router();
import {
  getAllUsers,
  addUsers,
  getUserById,
  deletUserById,
  patchUserById,
} from "../controllers/users.js";

/**Cannot GET /users will be returned if a person tried to access this route as it is. Because we are already inside the route /users so the /users that router is trying to get is not needed. it is redundant
router.get("/users", (req, res) => {
  res.send("Hello Requester");
});**/

router.get("/", getAllUsers); // Now we het "Hello Requester" at http://localhost:5000/users

//Router post method to get user data from the front end.

router.post("/", addUsers); //this will successfully fire if the post request gets to us
//After making a post reuest from postman we can make a get request from it or from our bropwser to confirm that the entered data was received

//Let us create another request type which can allow a specific user's data to be received according to their ID
router.get("/:id", getUserById);

//Now let us create a route for deleting data from the database

router.delete("/:id", deletUserById);

//Let us activate a route to allow users to update their information.
// We use patch when we want to partially edit a uder detail
//We use put method when we need to change everything about the user
// Now remember that we will be getting data from the user to change the data wre have here already for the user specified. So it will make this one a bit complicated

router.patch("/:id", patchUserById);

export default router;

/*
posibility:

  if foundUser {
    return res.send(foundUser)
  } else{
    return res.send("Sorry, no user with that ID found")
  }
*/
