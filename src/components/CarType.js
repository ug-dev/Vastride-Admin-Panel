import React from "react";
import Search from "../image/search.svg";
import Next from "../image/next.svg";
import Prev from "../image/prev.svg";
import Last from "../image/last.svg";
import First from "../image/first.svg";
import Car from "../image/car.svg";
import Car2 from "../image/car-2.svg";
import Car3 from "../image/car-3.svg";
import "../css/CarType.css";

export default function CarType() {
  return (
    <div className="car-type">
      <div className="car-type-content">
        <div className="car-type-header">
          <p>Car Type</p>
          <div className="search-box">
            <img src={Search} alt="" />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="car-type-table">
          <table>
            <tr>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
            </tr>
            <tr>
              <td>
                <img id="car-1" src={Car} alt="" />
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <img id="car-2" src={Car2} alt="" />
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <img id="car-3" src={Car3} alt="" />
              </td>
              <td>Umang</td>
              <td>Gadhavana</td>
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
