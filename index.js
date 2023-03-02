import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import todoListPgRoutes from "./routes/todolist-pg.routes.js";
import todoListMgRoute from "./routes/todolist-mg.routes.js";

//init
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

//set up logger
app.use(morgan("tiny"));

//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set up routes
app.get("/",(req, res) => {
	res.write('<a href="./mg/">mongo-route</a>');
	res.write('<br>');
	res.write('<a href="./pg/">postgre-route</a>');
	res.end();
})
app.use("/pg/", todoListPgRoutes);
app.use("/mg/", todoListMgRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
