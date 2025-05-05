import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Header from "../../components/header/Header";
import FaqComponent from "../../components/faq/FaqComponent";
import { faqData } from "../../portfolio";

class FaqPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "150vh",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header theme={this.props.theme} />

        <div style={{ flex: 1 }}>
          <FaqComponent faqData={faqData} theme={this.props.theme} />
        </div>

        <Footer theme={this.props.theme} />

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default FaqPage;
