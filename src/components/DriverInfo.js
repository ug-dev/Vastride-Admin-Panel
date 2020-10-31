import React from "react";
import Photo from "../image/driving-license.svg";

import "../css/DriverInfo.css";

export default function DriverInfo() {
  const Detail = ({ name, value }) => {
    return (
      <div className="detail">
        <div className="detail-text">
          <p>{name}</p>
        </div>

        <input className="detail-box" type="text" value={value} />
      </div>
    );
  };

  const Image = ({ value }) => {
    return (
      <div className="driver-info-image">
        <div className="image-border">
          <img src={Photo} alt="" />
        </div>
        <p>{value}</p>
      </div>
    );
  };

  return (
    <div className="driver-info">
      <div className="driver-info-content">
        <div className="driver-info-header">
          <p>Driver Info.</p>
        </div>
        <div className="driver-info-details">
          <Detail name="Firstname:" value="Umang" />
          <Detail name="Lastname:" value="Gadhavana" />
          <Detail name="Email:" value="gadhavanaumang007@gmail.com" />
          <Detail name="Phone:" value="+91 9016700668" />
          <Detail name="Vehicle Model:" value="Lamborghini Gallardo" />
          <Detail name="Vehicle Number:" value="GJ-3 UG 0001" />
          <Detail name="Car Type:" value="Luxury Sports" />
          <div className="driver-info-images">
            <Image value="Driver's License" />
            <Image value="Car Document" />
            <Image value="Other Document" />
          </div>

          <div className="driver-info-buttons">
            <button>Verify</button>
            <button>Contact</button>
            <button>Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}
