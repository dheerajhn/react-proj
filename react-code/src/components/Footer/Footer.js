import React, { Component } from "react";
import DownIcon from "../../assets/images/down.png";
import UpIcon from "../../assets/images/up.png";

class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <div>
          <ul className="padding-zero">
            <li className="">
              <p className="color-59606b font-size-14 font-family font-weight-600 margin-zero">
                SENSEX
              </p>
            </li>
            <li className="mar-left-17">
              <p className="color-f4f5f6 font-size-14 font-family font-weight-600 margin-zero">
                25,656.70 (-0.75%)
                <img src={DownIcon} className="mar-left-15" alt={DownIcon} />
              </p>
            </li>
            <li className="mar-left-39">
              <p className="color-59606b font-size-14 font-family font-weight-600 margin-zero">
                NIFTY
              </p>
            </li>
            <li className="mar-left-17">
              <p className="color-f4f5f6 font-size-14 font-family font-weight-600 margin-zero">
                25,656.70 (-0.75%)
                <img src={UpIcon} className="mar-left-15" alt={UpIcon} />
              </p>
            </li>
            <li className="mar-left-20">
              <p className="color-59606b font-size-14 font-family font-weight-600 margin-zero">
                (Current Prices and Indicies are delayed by 15 mins during
                market hours)
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Footer;
