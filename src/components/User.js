import { Component, useState } from "react";
import UserClass from "./UserClass";

const User = (props) => {
  const [count] = useState(0);
  console.log("function props", props);
  const { name, location, contact } = props.info;
  return (
    <>
      <div className="user-card">
        <h3>Function Component</h3>
        ===================
        <div> Count: {count} </div>
        <h2>Name: {name}</h2>
        <h3> Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>

      <UserClass />
    </>
  );
};

// class User extends Component {
//   constructor(props) {
//     super(props);
//     console.log("parent constructor");
//   }

//   componentDidMount() {
//     console.log("parent componentDidMount called");
//   }

//   render() {
//     console.log("parent render");
//     return (
//       <>
//         <h3>User Class Component</h3>
//         <UserClass name={"Sudheer Kumar"} location={"Hyderabad"} />
//       </>
//     );
//   }
// }

export default User;
