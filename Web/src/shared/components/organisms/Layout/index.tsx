import * as React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </div>
  </div>
);

export default Layout;
