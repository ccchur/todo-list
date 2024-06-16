import { Input } from "@nextui-org/input";
import {Button} from "@nextui-org/react";
export default function AddToDo() {
	return (
		<div className="w-full flex flex-row items-center gap-4 absolute bottom-0">

			<Input size='md' type="text" placeholder="输入待办事项" color="primary" />
            <Button size="md" color="primary">
                添加
            </Button> 
			</div> 
	)
}
