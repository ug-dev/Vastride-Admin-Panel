import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SidePanel from "./components/SidePanel";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import CarType from "./components/CarType";
import VerifyDriver from "./components/VerifyDriver";
import Menu from "./image/menu.svg";
import DriverInfo from "./components/DriverInfo";

function App() {
  const [menuClass, setMenuClass] = useState("");
  const [visibleClass, setVisibleClass] = useState("");

  const menuToggle = () => {
    if (menuClass === "open" && visibleClass === "visible") {
      setMenuClass("");
      setVisibleClass("");
    } else {
      setMenuClass("open");
      setVisibleClass("visible");
    }
  };

  const menuToggle2 = () => {
    if (menuClass === "open" && visibleClass === "visible") {
      setMenuClass("");
      setVisibleClass("");
    }
  };

  return (
    <Router>
      <div className="App">
        <SidePanel menuToggle={menuToggle} menuClass={menuClass} />
        <div className="main-content">
          <nav>
            <img onClick={menuToggle} src={Menu} alt="" />
            <p>Admin Panel</p>
          </nav>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/users" exact component={Users} />
            <Route path="/car-type" exact component={CarType} />
            <Route path="/verify-driver" exact component={VerifyDriver} />
            <Route path="/driver-info" exact component={DriverInfo} />
          </Switch>
        </div>
        <div
          onClick={menuToggle2}
          className={`side-panel-mask ${visibleClass}`}
        ></div>
      </div>
    </Router>
  );
}

export default App;
