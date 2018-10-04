import React, { Component } from "react";
import DownIcon from "../../assets/images/down.png";
import UpIcon from "../../assets/images/up.png";

class Sidebar extends Component {
  render() {
    return (
      <div className="left-tab">
        <div className="market-update">
          <div className="form-group form-s market-down">
            <label for="usr">Sensex</label>
            <input
              type="read"
              className="sensex"
              id="usr"
              value="25,656.70"
              readonly=""
            />
            <span className="market-down down-icon">
              <img src={DownIcon} alt={DownIcon} />
              <input
                style={{ width: 41 }}
                type="read"
                className="sensex sensex-float"
                id="usr"
                value="-0.75%"
                readonly=""
              />
            </span>
            {/* <!-- when sensex & nifty price down than ("down-icon" for images className  ) className used it.  --> */}
          </div>
          <div className="form-group form-s nifty market-up">
            <label for="usr">Nifty</label>
            <input
              type="read"
              className="sensex"
              id="usr"
              value="25,656.70"
              readonly=""
            />
            <span className="market-up up-icon">
              <img src={UpIcon} alt={UpIcon} />
              <input
                style={{ width: 41 }}
                type="read"
                className="sensex sensex-float"
                id="usr"
                value="0.75%"
                readonly=""
              />
            </span>
          </div>
          {/* <!-- when sensex & nifty price up than (up-icon) className used it.  --> */}
        </div>
        <div className="footer-text">
          <p>
            (Current Prices and Indicies are delayed by 15 mins during mkt hrs)
          </p>
        </div>
        <div className="top-left-label">
          <p>Last Accessed</p>
        </div>
        <div id="left-tab-container">
          <ul className="client-left-tab">
            <li className="tab-1 tab-c tab-active">
              <a className="tab-a" href="#tab1">
                <p className="c-name">NIRALI RATHI</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-2 tab-c">
              <a className="tab-a" href="#tab2">
                <p className="c-name">RITESH</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-3 tab-c">
              <a className="tab-a" href="#tab3">
                <p className="c-name">ARUN UNCLE</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-4 tab-c">
              <a className="tab-a" href="#tab4">
                <p className="c-name">ARUN UNCLE</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-5 tab-c">
              <a className="tab-a" href="#tab5">
                <p className="c-name">NIRALI</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-6 tab-c">
              <a className="tab-a" href="#tab6">
                <p className="c-name">MADAN</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-7 tab-c">
              <a className="tab-a" href="#tab7">
                <p className="c-name">URVI</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-8 tab-c">
              <a className="tab-a" href="#tab8">
                <p className="c-name">MADAN</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-9 tab-c">
              <a className="tab-a" href="#tab9">
                <p className="c-name">MADAN</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
            <li className="tab-10 tab-c">
              <a className="tab-a" href="#tab10">
                <p className="c-name">MADAN</p>
                <p className="c-balance">10,9200.00</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
