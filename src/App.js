import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Signup from "./pages/signup";
import FindForm from "./pages/findForm";
import ReturnForm from "./pages/returnForm";
import Dashboard from "./components/dashboard";
import PasswordRegainPage from './pages/passwordRegain';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={Signup} />
        <Route path = "/regainPassword" component = {PasswordRegainPage}/>
        <Route path="/find" component={FindForm} />
        <Route path="/return" component={ReturnForm} />
        <Route path = "/dashboard" component = {Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
