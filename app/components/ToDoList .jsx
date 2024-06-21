import ToDoItem from "./ToDoItem"
export default function ToDoList({title, todoList, deleteToDo, markToDo, finishToDo}) {
    return (
        <div className="relative w-[48%] mt-[25px]">
            <span className="absolute -top-[15px] left-[20px] flex items-center px-[15px] py-[5px] bg-green-600 text-white rounded-[20px] text-base shadow-md z-10">
                {title}
            </span>
            <div
                className=" h-[52vh] overflow-y-auto scrollbar-hide border-spacing-4 border-solid border-2 rounded-md pt-[20px] shadow-md"
            >
                
            { todoList.map((item, index) => <ToDoItem item={item} key={item}
                deleteToDo={deleteToDo}
                markToDo={markToDo}
                finishToDo={finishToDo}
            ></ToDoItem>)}
            </div>
        </div>
    )
}