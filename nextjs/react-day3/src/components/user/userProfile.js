import React from "react";
import { useUser } from "../../context/UserContext";
const UserProfile = () => {
    const { user } = useUser();
  
    if (!user) return <p>User is not logged-in</p>;
  
    return (
     <>
      <h2>User Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
     </>
    );
  };
  export default UserProfile;