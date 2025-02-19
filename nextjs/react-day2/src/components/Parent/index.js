import React,{useState} from "react";
import Child from "./child";
export default function Parent(){
const [msg] = useState("Hello, I'm Parent component")
    return(
        <>
            <p>{msg}</p>
            <Child />
        </>
    )

}