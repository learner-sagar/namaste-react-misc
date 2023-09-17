import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/learner-sagar");
    const user = await response.json();
    this.setState({
      name: user.name,
      location: user.location,
      contact: `@${user.twitter_username}`,
    });
    console.log(user);
  }
  render() {
    const { name, location, contact } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
