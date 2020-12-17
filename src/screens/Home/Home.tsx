import * as React from "react";
import { Component } from "react";
import { Header, HeaderType, Hero, Footer, Menu } from "../../components";
import { categories, userMenuOptions } from "../../mockData";
import { Categories } from "./Categories";
import { throttle } from "../../utilities";
import "./home.scss";

export class Home extends Component<any, any> {
  state = {
    headerType: HeaderType.WHITE,
    showMenu: false,
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

  render(): JSX.Element {
    const { showMenu } = this.state;
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

        <Header
          type={this.state.headerType}
          onMenuButtonClick={this.toggleMenu}
        />
        <Hero />
        <Categories />
        <Footer />
      </div>
    );
  }
}
