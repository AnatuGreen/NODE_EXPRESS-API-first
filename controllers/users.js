import { v4 as uuidv4 } from "uuid";
let users = [];

export const getAllUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

const addUsers = (req, res) => {
  console.log("Post route reached");
  //res.send("Post route was contacted");
  //console.log(req.body); //show us what is in the body of the request
  const newUser = req.body;
  //Creating a un9ique user id:
  const userID = uuidv4();
  //Updating the user info received with a unique id using spread operator:
  const userWithID = { ...newUser, id: userID };
  users.push(userWithID); //update users array
  /*We could have also made the code shorter by doing this since userWithID is just mentioned once:
  users.push({ ...newUser, id: userID }) but I will leave it like this for now */
  //send a meaningful message to the user that send the message
  res.send(
    `User with the username ${newUser.firstName} has successfully been received on serverside. Thank you.`
  );
};

const getUserById = (req, res) => {
  //We recieved an id entered after the route /users and we will us it to serach our database to see if such ID exists, if it is, we can then sebnd back the data of the found user. :id above reps any id that the requester might make
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

const deletUserById = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  //We used filter array function to search through the users and return only the users whose ids do not match the id provided  by the user at fronend who made the delete request
  res.send(
    `The user with the provided ID; ${id} has been deleted. You can check to see by invoking a get`
  ); // Show the user a useful message
};

const patchUserById = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userToBeUpdated = users.find((user) => user.id == id);
  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }
  if (lastName) {
    userToBeUpdated.lastName = lastName;
  }
  if (age) {
    userToBeUpdated.age = age;
  }

  res.send(
    `The requested data for user with id ${id} has been update. Get to check`
  );
};

export { addUsers, getUserById, deletUserById, patchUserById };
