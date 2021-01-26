import logo from "./logo.svg";
// import "./App.css";
import Login from "./loginPage";
import Welcome from "./rootPage";
import Admin from "./adminPage";
import { userState } from "react";
import ProtectedLoginRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LayoutOne from "./components/layout";

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
  return (
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
  );
}

export default App;
