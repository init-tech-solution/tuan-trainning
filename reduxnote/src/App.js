import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import noteReducer from "./reducer/noteReducer";
import LoginPage from "./loginpage";
import AddNote from "./addNote";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import thunk from "redux-thunk";

function App() {
  const store = createStore(noteReducer, applyMiddleware(thunk));
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/" component={AddNote}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
