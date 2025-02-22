import React, {useState} from "react";
import {useUser} from '../../context/UserContext';

const Login= ()=>{
    const { login } = useUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "" });

  
    const handleLogin = () => {
      if (validateForm()) {
        login(name, email);
        setName("");
        setEmail("");
      }
    };
    const validateForm = () => {
        let valid = true;
        let newErrors = { name: "", email: "" };

        if (!name.trim().length) {
            newErrors.name = "Enter the name";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Enter  valid email";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };
    return(
        <>
        <p>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} id="name" />
            {errors.name && <span className="color-red">{errors.name}</span>}
        </p>
        <p>
            <label htmlFor="email">
                Email:
            </label>
            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
            {errors.email && <span className="color-red">{errors.email}</span>}
        </p>
        <p>
            <button onClick={handleLogin}>Login</button>
        </p>
        </>
    )
}
export default Login;