import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import FaqPage from "../pages/faq/FaqPage";
import EventsPage from "../pages/events/EventsPage";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />

          <Route
            path="/FAQ"
            render={(props) => <FaqPage {...props} theme={this.props.theme} />}
          />

          <Route
            path="/events"
            render={(props) => (
              <EventsPage {...props} theme={this.props.theme} />
            )}
          />

          {settings.isSplash && (
            <Route
              path="/"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
