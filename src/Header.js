import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
        <input
          className="new-todo"
          placeholder="What needs to be Done?"
          autoFocus
        />
      </header>
    );
  }
}

export default Header;


