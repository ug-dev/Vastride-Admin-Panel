import React from "react";
import Logo from "../image/logo-1.svg";
import Dashboard from "../image/dashboard.svg";
import Users from "../image/users.svg";
import Car from "../image/car.svg";
import Settings from "../image/settings.svg";
import Logout from "../image/logout.svg";
import Close from "../image/close.svg";
import Verify from "../image/verify.svg";
import { Link } from "react-router-dom";

export default function SidePanel({ menuClass, menuToggle }) {
  return (
    <div className={`side-panel ${menuClass}`}>
      <div className="top-banner">
        <img id="logo" src={Logo} alt="" />
        <div onClick={menuToggle}>
          <img id="close" src={Close} alt="" />
        </div>
      </div>
      <div className="bottom-banner">
        <ul>
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <li onClick={menuToggle}>
              <img src={Dashboard} alt="" />
              <p>Dashboard</p>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/users">
            <li onClick={menuToggle}>
              <img src={Users} alt="" />
              <p>Users</p>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/car-type">
            <li onClick={menuToggle}>
              <img src={Car} alt="" />
              <p>Car Type</p>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/verify-driver">
            <li onClick={menuToggle}>
              <img src={Verify} alt="" />
              <p>Verify Driver</p>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/settings">
            <li onClick={menuToggle}>
              <img src={Settings} alt="" />
              <p>Settings</p>
            </li>
          </Link>
          <li onClick={menuToggle}>
            <img src={Logout} alt="" />
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
