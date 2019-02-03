import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <nav className="navbar navbar-dark bg-dark justify-content-start">
    <span className="navbar-brand mb-0 h1">blabla-bot</span>
    <div className="d-inline-block">
      <Link className="nav-item nav-link float-left" to={"/"}>
        Generovat!
      </Link>
      <Link className="nav-item nav-link float-left" to={"/about"}>
        O Projektu
      </Link>
    </div>
  </nav>
);

export default Header;
