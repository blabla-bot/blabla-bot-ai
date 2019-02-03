import * as React from "react";
import { withRouter, RouteComponentProps, Switch, Route } from "react-router";
import Layout from "./organisms/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

const App: React.FC<RouteComponentProps<{}>> = ({ location }) => (
  <div>
    <Layout>
      <Switch>
        <Route path={"/"} exact component={Homepage} />
        <Route path={"/about"} exact component={About} />
      </Switch>
    </Layout>
  </div>
);

export default withRouter(App);
