import React from "react";
import Dollar from "../image/dollar.svg";
import Bag from "../image/dollar-bag.svg";
import Wallet from "../image/wallet.svg";
import Map from "../image/map.png";
import "../css/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <p>Gross Earnings</p>
        <div className="gross-earnings">
          <div className="earnings-compo">
            <img src={Dollar} alt="" />
            <div className="earnings-text">
              <p>Today</p>
              <p>$ 200.00</p>
            </div>
          </div>
          <div className="earnings-compo">
            <img src={Bag} alt="" />
            <div className="earnings-text">
              <p>Monthly</p>
              <p>$ 200.00</p>
            </div>
          </div>
          <div className="earnings-compo">
            <img src={Wallet} alt="" />
            <div className="earnings-text">
              <p>Total</p>
              <p>$ 200.00</p>
            </div>
          </div>
        </div>
        <div className="driver-realtime">
          <p>Drivers Realtime</p>
          <img src={Map} alt="" />
        </div>
      </div>
    </div>
  );
}
