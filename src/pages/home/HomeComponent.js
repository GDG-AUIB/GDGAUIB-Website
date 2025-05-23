import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
//import Skills from "../../containers/skills/Skills";
import Teams from "../../containers/teams/Teams";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ConstructionAlert from "../../components/Alert/ConstructionAlert";

class Home extends Component {
  render() {
    return (
      <div>
        <ConstructionAlert />
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />

        <Teams theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
