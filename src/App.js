import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Dashboard from "./components/dashboard"
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: "They call me data, but thats not my name"
    }
  }



  render() {
    return (
    <div>
      <Header />
          <Route
              exact
              path="/"
              render={props => <Home {...props} />}
            />
            <Route
              exact
              path="/dashboard"
              render={props => <Dashboard {...props} data={this.state.data}/>}
            />
    </div>
    )
  }
}

export default App;
