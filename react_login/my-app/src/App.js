import logo from "./logo.svg";
// import "./App.css";
import Login from "./loginPage";
import Welcome from "./rootPage";
import Admin from "./adminPage";
import { userState } from "react";
import ProtectedLoginRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul> */}

        <Switch>
          <Route path="/login" component={Login}></Route>

          <ProtectedLoginRoute
            path="/admin"
            component={Admin}
            fail="/login"
          ></ProtectedLoginRoute>

          <ProtectedLoginRoute
            path="/"
            component={Welcome}
            fail="/login"
          ></ProtectedLoginRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
