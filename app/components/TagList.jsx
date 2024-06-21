import React from "react";
import {Chip} from "@nextui-org/react";

export default function TagList({ tags }) {
    return (
        <div>
            {tags.map((tag, index) => <Chip className="mr-[10px]" color="default" key={index}>{tag}</Chip>)}
        </div>
    )
}
