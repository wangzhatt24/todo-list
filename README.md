
# todo-list

**Route**
<br> /mg/todos/  using mongodb
<br> /pg/todos/  using postgres

<br> router.get("/todos", getAllTodo); 
<br> router.get("/todos/:id", getSingleTodo);
<br> router.post("/todos", createTodo);
<br> router.patch("/todos/:id", updateTodo);
<br> router.delete("/todos/:id", deleteTodo);

**Schema Mongodb**: 
<br> _id: mongoose ObjectId
<br> title: String
<br> content: String
<br> createdDate: Date
<br> completed: Boolean

**Model Postgres**:
<br> _id: int auto incre primary key
<br> title: String 
<br> content: String
<br> completed: Boolean
<br> createdAt: Date
<br> updatedAt: Date