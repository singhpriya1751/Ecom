import React from "react";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
  return (
    <>
      <div className="container">
        <div className="grid-three-coloumns">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-coloumn-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non Contact Shipping</h3>
              </div>
            </div>
            <div className="services-coloumn-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-Back Gauranteed</h3>
              </div>
            </div>
          </div>
          <div className="services-2">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Payment Mode is Secure</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
