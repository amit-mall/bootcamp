import React,{useState} from "react";

export default function UserLogin(){
    const[login, setLogin] = useState(false);
    const handleClick = ()=>{
        setLogin(!login);
    }

    return(
       <>
        <button onClick={handleClick}>{login?"Logout":"Login"}</button>
        <p>
        {`${login? "Welcome back":"Please log in"}`}
        </p>
       </>
    )
}