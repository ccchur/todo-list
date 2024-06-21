"use client"
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList ";
import AddToDo from "./components/AddToDo";
import { useState, useEffect } from "react";
import TagList from "./components/TagList";
export default function Home() {

  const [todoList, setTodoList] = useState([]);

  const [typeList, setTypeList] = useState(['项目1','项目2','项目3']);

  useEffect(() => {
    const newTodoList = JSON.parse(localStorage.getItem("todo")) || [];
    setTodoList(newTodoList);
  }, []);
  const addToDo = (item) => {
    const newTodoList = [...todoList, item];
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
  };

  const deleteToDo = (item) => {
    const newTodoList = todoList.filter((e) => item.key !== e.key);
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
  };

  const markToDo = (item) => {
    const newTodoList = todoList.map((e) => {
      if (item.key === e.key) {
        e.isMarked = !e.isMarked;
      }
      return e;
    });
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
  }

  const finishToDo = (item) => {
    const newTodoList = todoList.map((e) => {
      if (item.key === e.key) {
        e.isFinished = !e.isFinished;
      }
      return e;
    });
    setTodoList(newTodoList);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
  }

    return (
      <div>
        <NextUIProvider>
          <div className="p-5 w-[70%] h-[95vh] m-auto relative">
            <Header></Header>
            <div className="mt-[20px]">
              <TagList tags={typeList}></TagList>
            </div>
            <AddToDo addToDo={addToDo} typeList={typeList}></AddToDo>
            <div className="w-[100%] flex flex-wrap justify-around">
              {typeList.map((e, index) => <ToDoList
                key={index}
                title={e}
                todoList={todoList}
                deleteToDo={deleteToDo}
                markToDo={markToDo}
                finishToDo={finishToDo}
              ></ToDoList>)}
              <i className="w-[48%] mt-[25px]" ></i>
              <i className="w-[48%] mt-[25px]"></i>
            </div>
            
          </div>
        </NextUIProvider>
      </div>
    
    );
  };

