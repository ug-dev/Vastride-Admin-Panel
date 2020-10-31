import React from "react";
import Edit from "../image/edit.svg";
import Delete from "../image/delete.svg";
import Right from "../image/right.svg";
import Cancel from "../image/cancel.svg";
import Search from "../image/search.svg";
import Next from "../image/next.svg";
import Prev from "../image/prev.svg";
import Last from "../image/last.svg";
import First from "../image/first.svg";
import "../css/Users.css";

export default function Users() {
  return (
    <div className="users">
      <div className="users-content">
        <div className="users-header">
          <p>All Users</p>
          <div className="search-box">
            <img src={Search} alt="" />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="users-table">
          <table>
            <tr>
              <th>Actions</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
            </tr>
            <tr>
              <td>
                <div className="action-icons">
                  <img id="edit" src={Edit} alt="" />
                  <img id="delete" src={Delete} alt="" />
                </div>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <div className="action-icons">
                  <img id="edit" src={Edit} alt="" />
                  <img id="delete" src={Delete} alt="" />
                </div>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <div className="action-icons">
                  {/* <img src={Edit} alt="" />
                  <img src={Delete} alt="" /> */}
                  <img src={Right} alt="" />
                  <img id="cancel" src={Cancel} alt="" />
                </div>
              </td>
              <td colSpan="12">Are you sure you want to delete this row?</td>
            </tr>
            <tr>
              <td>
                <div className="action-icons">
                  <img id="edit" src={Edit} alt="" />
                  <img id="delete" src={Delete} alt="" />
                </div>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <div className="action-icons">
                  <img id="edit" src={Edit} alt="" />
                  <img id="delete" src={Delete} alt="" />
                </div>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <div className="action-icons">
                  <img id="edit" src={Edit} alt="" />
                  <img id="delete" src={Delete} alt="" />
                </div>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <div className="action-icons">
                  <img id="edit" src={Edit} alt="" />
                  <img id="delete" src={Delete} alt="" />
                </div>
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
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
