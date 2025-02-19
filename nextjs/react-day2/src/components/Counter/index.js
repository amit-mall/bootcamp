import React, {useState} from "react";
export default function Counter(){
    const[count, setCount] = useState(0);

    const updateValue = (type)=>{
        setCount(type === "increment" ? count + 1 : count > 0 ? count - 1 : count);
    }
    return(
        <div className="foo">
            <p>Count: <span>{count}</span></p>
            <button onClick={()=>updateValue("increment")}>Increment</button>
            <button onClick={()=>updateValue("decrement")}>Decrement</button>
        </div>
    )
}