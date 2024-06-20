import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react"
export default function AddToDo({addToDo}) {

	const [inputValue, setInputValue] = useState("");

	const handleAddToDo = () => {
		if (inputValue.trim() !== "") {
		addToDo({key: genID(),value:inputValue});
		setInputValue(""); // 清空输入框
		}
	};
	
	function genID(){
		return  crypto.randomUUID();
	}

	return (
		<div className="w-full flex flex-row items-center gap-4 absolute bottom-0">

			<Input size='md' type="text" placeholder="输入待办事项" color="primary"
				onChange={(e) => setInputValue(e.target.value)} value={inputValue}
			/>

			<Button size="md" color="primary" onClick={handleAddToDo}>
                添加
            </Button> 
			</div> 
	)
}
