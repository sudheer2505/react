import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, contact } = this.props.info;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h3>Class Component</h3>
        ================
        <div>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 2,
              });
            }}
          >
            Increase Count
          </button>
        </div>
        <div> Count: {count} </div>
        <h2>Name: {name}</h2>
        <h3> Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
