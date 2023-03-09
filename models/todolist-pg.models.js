import sequelize from "./connector.model.js";
import { DataTypes, DATE } from "sequelize";

const TodoModel = sequelize.define(
  "todolist",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planedFinish: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delayed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default TodoModel;
