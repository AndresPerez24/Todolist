import React, { Component } from "react";
import Header from "./Header";
import Task from "./Task";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "todos"
    };
  }
  setName = () => {
    this.setState({ title: "Andres" });
  };
  render() {
    return (
      <div>
        <section className="todoapp">
          <Header title={this.state.title} />
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              <Task />
            </ul>
          </section>
          <Footer />
        </section>
        <button onClick={this.setName}>Test</button>
      </div>
    );
  }
}

export default App;
