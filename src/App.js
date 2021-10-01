import { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import StopWatch from "./components/StopWatch";
import Counter from "./components/Counter";
import LoaderPage from "./pages/LoaderPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="App-nav">
          <ul className="App-ul">
            <li>
              <NavLink to="/" activeClassName="App-link">
                |to Home|
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="App-link">
                |to about|
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName="App-link">
                |to Contacts|
              </NavLink>
            </li>
            <li>
              <NavLink to="/counter" activeClassName="App-link">
                |to Counter|
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={LoaderPage} />
          <Route path="/contacts" component={StopWatch} />
          <Route path="/counter" component={Counter} />

          <Route path="/*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const Home = () => <div>Home</div>;
const NotFound = () => <div>error 404</div>;
export default App;
