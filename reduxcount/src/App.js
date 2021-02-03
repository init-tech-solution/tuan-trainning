import logo from "./logo.svg";
import "./App.css";
import CountReducer from "./countReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Navbar from "./navbar";
import Item from "./Item";
import thunk from "redux-thunk";

function App() {
  const store = createStore(CountReducer, applyMiddleware(thunk));
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Item />
      </Provider>
    </div>
  );
}

export default App;
