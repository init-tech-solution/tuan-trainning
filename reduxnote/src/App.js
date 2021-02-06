import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import noteReducer from "./noteReducer";
import LoginPage from "./loginpage";
import NotePage from "./notepage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const store = createStore(noteReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/" component={NotePage}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
