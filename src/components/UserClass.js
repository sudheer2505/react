import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child componentDidMount called");
    let res = await fetch("https://api.github.com/users/sudheer2505");
    let json = await res.json();
    console.log("user data = ", json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update called");
  }

  render() {
    console.log("child render");
    // const { name, location } = this.props;
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h3>Class Component</h3>
        ================
        <h2>Name: {name}</h2>
        <h3> Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
