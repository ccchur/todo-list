import ToDoItem from "./ToDoItem"
import { useState } from "react"
export default function ToDoList({todoList, deleteToDo, markToDo, finishToDo}) {
    return (
        todoList.map((item, index) => <ToDoItem item={item} key={item.key}
            deleteToDo={deleteToDo}
            markToDo={markToDo}
            finishToDo={finishToDo}
        ></ToDoItem>)
    )
}