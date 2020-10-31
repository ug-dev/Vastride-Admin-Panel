import React from "react";
import Search from "../image/search.svg";
import Next from "../image/next.svg";
import Prev from "../image/prev.svg";
import Last from "../image/last.svg";
import First from "../image/first.svg";
import { Link } from "react-router-dom";
import "../css/VerifyDriver.css";

export default function VerifyDriver() {
  return (
    <div className="verify-driver">
      <div className="verify-driver-content">
        <div className="verify-driver-header">
          <p>Verify Driver</p>
          <div className="search-box">
            <img src={Search} alt="" />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="verify-driver-table">
          <table>
            <tr>
              <th>Actions</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
            <tr>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "#333" }}
                  to="/driver-info"
                >
                  <div className="action-icons">
                    <p>Verify</p>
                  </div>
                </Link>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
            </tr>
            <tr>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "#333" }}
                  to="/driver-info"
                >
                  <div className="action-icons">
                    <p>Verify</p>
                  </div>
                </Link>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
            </tr>
            <tr>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "#333" }}
                  to="/driver-info"
                >
                  <div className="action-icons">
                    <p>Verify</p>
                  </div>
                </Link>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
            </tr>
            <tr>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "#333" }}
                  to="/driver-info"
                >
                  <div className="action-icons">
                    <p>Verify</p>
                  </div>
                </Link>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
            </tr>
            <tr>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "#333" }}
                  to="/driver-info"
                >
                  <div className="action-icons">
                    <p>Verify</p>
                  </div>
                </Link>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
            </tr>
          </table>
        </div>
        <div className="row-option">
          <select>
            <option>5 ROWS</option>
            <option>10 ROWS</option>
            <option>20 ROWS</option>
          </select>

          <div className="navigation">
            <img src={First} alt="" />
            <img src={Prev} alt="" />
            <p>1 of 10</p>
            <img src={Next} alt="" />
            <img src={Last} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
