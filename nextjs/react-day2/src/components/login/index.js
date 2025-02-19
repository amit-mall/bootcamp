import React,{useState} from "react";

export default function Login(){
    const[login, setLogin] = useState(false);
    const handleClick = ()=>{
        setLogin(!login);
    }

    return(
       <>
        <button onClick={handleClick}>{login?"Logout":"Login"}</button>
        <p>User is {login?"login":"not login"}</p>
       </>
    )
}