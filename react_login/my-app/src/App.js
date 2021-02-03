// import "./App.css";
import Login from "./loginPage";
import Welcome from "./rootPage";
import Admin from "./adminPage";
import ProtectedLoginRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutOne from "./components/layout";
import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "./userReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

function RouteLayout({
  route: CustomRoute,
  layout: Layout,
  component: Component,
  ...restProps // props con lai
}) {
  return (
    <CustomRoute
      {...restProps}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

function App() {
  const store = createStore(userReducer, enhancer);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          {/* <RouteLayout
          route={Route}
          layout={LayoutOne}
          component={Login}
          path="/login"
        /> */}

          {/* <ProtectedLoginRoute
          path="/admin"
          component={Admin}
          fail="/login"
          layout={LayoutOne}
        ></ProtectedLoginRoute> */}
          <RouteLayout
            route={ProtectedLoginRoute}
            layout={LayoutOne}
            component={Admin}
            path="/admin"
            fail="/login"
          />

          <RouteLayout
            route={ProtectedLoginRoute}
            layout={LayoutOne}
            component={Welcome}
            path="/"
            fail="/login"
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
