import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./pages/About";
import Test from "./components/test/Test";
import Notfound from "./pages/Notfound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
