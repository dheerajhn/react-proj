/* eslint-disable */
import React, { Component } from "react"
import Logo from "../../assets/images/logo.png"
import ClientIcon from "../../assets/images/client-icon.png"

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-header padd-zero">
        <nav className="nav-bar row">
          <div className="header-row">
            <div className="header-logo">
              <img src={Logo} width="92" height="25" border="0" alt="MProfit" />
            </div>
            <div className="dropdown dorpdown-header">
              <button
                className="bttn dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="client-icon">
                  <img src={ClientIcon} alt={ClientIcon} />
                </span>
                S.Ramakrishnana
                <span className="caret" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div className="notification-icon">
              <p>10</p>
            </div>
            <div className="header-menu">
              <ul>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Referral</a>
                </li>
                <li>
                  <a href="#">Gadgets</a>
                </li>
                <li>
                  <a href="#">Tools </a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="search-bar-row ">
          <div className="dropdown drop-search">
            <button
              className="btttn dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span className="dropdown-menu-serach">
                <ul>
                  <li className="client-name">
                    RATHI FAMILY
                    <span className="caret caret-arrow" />
                  </li>
                  <li className="client-period">Period 01/04/15 to 31/03/16</li>
                </ul>
              </span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-box"
              aria-labelledby="dropdownMenu1"
            >
              <li>
                <form className="form-inline">
                  <div className="form-g">
                    <label>Search by Alphabetical Order</label>
                    <ul>
                      <li>
                        <a href="#">A</a>
                      </li>
                      <li>
                        <a href="#">B</a>
                      </li>
                      <li>
                        <a href="#">C</a>
                      </li>
                      <li>
                        <a href="#">D</a>
                      </li>
                      <li>
                        <a href="#">E</a>
                      </li>
                      <li>
                        <a href="#">F</a>
                      </li>
                      <li>
                        <a href="#">G</a>
                      </li>
                      <li>
                        <a href="#">H</a>
                      </li>
                      <li>
                        <a href="#">I</a>
                      </li>
                      <li>
                        <a href="#">J</a>
                      </li>
                      <li>
                        <a href="#">K</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">N</a>
                      </li>
                      <li>
                        <a href="#">O</a>
                      </li>
                      <li>
                        <a href="#">P</a>
                      </li>
                      <li>
                        <a href="#">Q</a>
                      </li>
                      <li>
                        <a href="#">R</a>
                      </li>
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">T</a>
                      </li>
                      <li>
                        <a href="#">U</a>
                      </li>
                      <li>
                        <a href="#">V</a>
                      </li>
                      <li>
                        <a href="#">W</a>
                      </li>
                      <li>
                        <a href="#">X</a>
                      </li>
                      <li>
                        <a href="#">Y</a>
                      </li>
                      <li>
                        <a href="#">Z</a>
                      </li>
                    </ul>
                  </div>
                  <div className="form-group form-sf">
                    <input
                      className="search-family"
                      type="search-category"
                      className="form-control"
                      id="search-category"
                      placeholder="Search for Family"
                    />
                  </div>
                </form>
              </li>
              <li>
                <div className="most-recent-search">
                  <p>Most Recent Search</p>
                  <ul>
                    <li>
                      <a href="#">K.Subramanium</a>
                    </li>
                    <li>
                      <a href="#">Purushottam Nata...</a>
                    </li>
                    <li>
                      <a href="#">Deepika Padukone</a>
                    </li>
                    <li>
                      <a href="#">Ranbir Singh</a>
                    </li>
                    <li>
                      <a href="#">Kajol Mukjerjee</a>
                    </li>
                    <li>
                      <a href="#">Ritika Thakkar</a>
                    </li>
                    <li>
                      <a href="#">Urvi Dalal Ashar</a>
                    </li>
                  </ul>
                </div>
                <div className="recent-search recent-border-right recent-margin">
                  <p>By User Type</p>
                  <h3>Platinum (313)</h3>
                  <ul>
                    <li>
                      <a href="#">K.Subramanium</a>
                    </li>
                    <li>
                      <a href="#">Purushottam Nata...</a>
                    </li>
                    <li>
                      <a href="#">Deepika Padukone</a>
                    </li>
                    <li>
                      <a href="#">Ranbir Singh</a>
                    </li>
                    <li>
                      <a href="#">Kajol Mukjerjee</a>
                    </li>
                    <li>
                      <a href="#">Ritika Thakkar</a>
                    </li>
                    <li>
                      <a href="#">Urvi Dalal Ashar</a>
                    </li>
                  </ul>
                  <a>
                    View 300 more
                    <i className="fa fa-angle-right" />
                  </a>
                  <div className="border-bottm" />
                  <h3>Gold (313)</h3>
                  <ul>
                    <li>
                      <a href="#">K.Subramanium</a>
                    </li>
                    <li>
                      <a href="#">Purushottam Nata...</a>
                    </li>
                    <li>
                      <a href="#">Deepika Padukone</a>
                    </li>
                    <li>
                      <a href="#">Ranbir Singh</a>
                    </li>
                    <li>
                      <a href="#">Kajol Mukjerjee</a>
                    </li>
                    <li>
                      <a href="#">Ritika Thakkar</a>
                    </li>
                    <li>
                      <a href="#">Urvi Dalal Ashar</a>
                    </li>
                  </ul>
                  <a>
                    View 300 more
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="recent-search recent-border-right recent-margina-a">
                  <h3 className="recent-top">Silver (33)</h3>
                  <ul>
                    <li>
                      <a href="#">K.Subramanium</a>
                    </li>
                    <li>
                      <a href="#">Purushottam Nata...</a>
                    </li>
                    <li>
                      <a href="#">Deepika Padukone</a>
                    </li>
                    <li>
                      <a href="#">Ranbir Singh</a>
                    </li>
                    <li>
                      <a href="#">Kajol Mukjerjee</a>
                    </li>
                    <li>
                      <a href="#">Ritika Thakkar</a>
                    </li>
                    <li>
                      <a href="#">Urvi Dalal Ashar</a>
                    </li>
                  </ul>
                  <a>
                    View 300 more
                    <i className="fa fa-angle-right" />
                  </a>
                  <div className="border-bottm" />
                  <h3>Bronze (313)</h3>
                  <ul>
                    <li>
                      <a href="#">K.Subramanium</a>
                    </li>
                    <li>
                      <a href="#">Purushottam Nata...</a>
                    </li>
                    <li>
                      <a href="#">Deepika Padukone</a>
                    </li>
                    <li>
                      <a href="#">Ranbir Singh</a>
                    </li>
                    <li>
                      <a href="#">Kajol Mukjerjee</a>
                    </li>
                    <li>
                      <a href="#">Ritika Thakkar</a>
                    </li>
                    <li>
                      <a href="#">Urvi Dalal Ashar</a>
                    </li>
                  </ul>
                  <a>
                    View 300 more
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
                <div className="recent-search recent-margina-b">
                  <h3 className="recent-top">Copper (33)</h3>
                  <ul>
                    <li>
                      <a href="#">K.Subramanium</a>
                    </li>
                    <li>
                      <a href="#">Purushottam Nata...</a>
                    </li>
                    <li>
                      <a href="#">Deepika Padukone</a>
                    </li>
                    <li>
                      <a href="#">Ranbir Singh</a>
                    </li>
                    <li>
                      <a href="#">Kajol Mukjerjee</a>
                    </li>
                    <li>
                      <a href="#">Ritika Thakkar</a>
                    </li>
                    <li>
                      <a href="#">Urvi Dalal Ashar</a>
                    </li>
                  </ul>
                  <a>
                    View 20 more
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <button className="btn manage">Manage</button>
          <button className="btn import">Import</button>
          <div className="search-bar">
            <form className="form-inline">
              <div className="form-group">
                <input
                  className="search-icon"
                  type="search-category"
                  className="form-control"
                  id="search-category"
                  placeholder="Search for Ledgers, Accounts, Portfolio etc..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
