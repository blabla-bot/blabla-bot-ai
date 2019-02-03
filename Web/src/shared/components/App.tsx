import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

const App: React.FC<RouteComponentProps<{}>> = ({ location }) => (
  <div>
    <p>Hello world from {location.pathname}</p>
    <Link to={"/lol"}>Test?</Link>
  </div>
);

export default withRouter(App);
