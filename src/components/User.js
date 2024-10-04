import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  console.log("function props", props);
  const { name, location, contact } = props.info;
  return (
    <div className="user-card">
      <h3>Function Component</h3>
      ===================
      <div> Count: {count} </div>
      <h2>Name: {name}</h2>
      <h3> Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
