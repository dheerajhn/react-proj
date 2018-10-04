import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="main-container mar-bot-8">
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Landing;
