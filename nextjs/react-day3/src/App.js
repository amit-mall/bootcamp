import './App.css';
import UserLogin from './components/userLogin';
import React from "react";
import ThemeChange from "./components/themeChange"
import { ThemeProvider } from "./context/themeContext"; 
import Login from './components/user/Login';
import UserProfile from './components/user/userProfile';
import {UserProvider} from './context/UserContext';
function App() {
  return (
    <div className="App">
      <div className="box">
        <h2>Question 1</h2>
        <p>Create a component that shows different content based on whether the user is logged in or not (e.g., "Welcome back" or "Please log in"). Use a state hook to toggle the logged-in state and update the UI accordingly.</p>
        <UserLogin />
      </div>
      <div className="box">
        <h2>Question 2</h2>
       <p>Create a simple ThemeContext that toggles between light and dark themes. Implement a ThemeProvider that supplies the current theme, and a ThemeToggler component that switches between themes. Make sure that the theme changes dynamically in child components.</p>
       <ThemeProvider>
        <ThemeChange />
      </ThemeProvider>
      </div>
      <div className="box">
        <h2>Question 3</h2>
        <UserProvider>
          <Login />
          <UserProfile />
        </UserProvider>
      </div>

    </div>
  );
}

export default App;
