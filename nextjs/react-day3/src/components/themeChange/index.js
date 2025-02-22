import React, {useContext} from "react";
import {ThemeContext} from '../../context/themeContext';
import './style.css';

export default function ThemeChange(){
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
           <button onClick={toggleTheme} className="p-2 border rounded">
            Switch to {theme === "light" ? "dark" : "light"} mode
            </button>
            <div className={`theme color-${theme}`}>{`This is ${theme} theme`}</div> 
        </>
     
      );
}