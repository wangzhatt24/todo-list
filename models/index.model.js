import TodoModel from "./todolist-pg.models.js";

// //create table
try {
  await TodoModel.sync();
  console.log("Todomodel table created!");
} catch (error) {
  console.log(error);
}

export { TodoModel };
