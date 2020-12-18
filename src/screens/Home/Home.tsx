import * as React from "react";
import { Component } from "react";
import {
  Header,
  HeaderType,
  Hero,
  Footer,
  Menu,
  Login,
} from "../../components";
import { categories, userMenuOptions } from "../../mockData";
import { Categories } from "./Categories";
import { throttle } from "../../utilities";
import "./home.scss";

export class Home extends Component<any, any> {
  state = {
    headerType: HeaderType.WHITE,
    showMenu: false,
    showLogin: false,
  };

  onContainerScroll = (e: any) => {
    console.log(1);
    if (e.target.scrollTop > 50)
      this.setState(() => ({
        headerType: HeaderType.BLACK,
      }));
    else
      this.setState(() => ({
        headerType: HeaderType.WHITE,
      }));
  };

  toggleMenu = () => this.setState(() => ({ showMenu: !this.state.showMenu }));

  onLogoutClick = () => {};

  onMenuItemClick = () => {};

  onLoginClick = () =>
    this.setState(() => ({ showLogin: !this.state.showLogin }));

  onFacebookAccountClick = () => {};

  onGoogleAccountClick = () => {};

  render(): JSX.Element {
    const { showMenu, showLogin } = this.state;
    return (
      <div
        className="home-screen"
        onScroll={(e: React.SyntheticEvent) =>
          throttle(this.onContainerScroll, 100)(e)
        }
      >
        {showMenu && (
          <Menu
            categories={categories}
            userMenuOptions={userMenuOptions}
            onLogoutClick={this.onLogoutClick}
            onClose={this.toggleMenu}
            onMenuItemClick={this.onMenuItemClick}
          />
        )}

        {showLogin && (
          <Login
            onFacebookAccountClick={this.onFacebookAccountClick}
            onGoogleAccountClick={this.onGoogleAccountClick}
            onClose={this.onLoginClick}
          />
        )}

        <Header
          type={this.state.headerType}
          onMenuButtonClick={this.toggleMenu}
          isAuthenticated={false}
          onLoginClick={this.onLoginClick}
        />
        <Hero />
        <Categories />
        <Footer />
      </div>
    );
  }
}
