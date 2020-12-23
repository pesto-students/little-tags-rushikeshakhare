import React, { useState } from "react";
import { Header, HeaderType, Footer, Menu, Login } from "../components";
import { categories, userMenuOptions } from "../mockData";
import { throttle } from "../utilities";

export const withContainer = (ScreenComponent: any) => {
  return function (props: any) {
    const [headerType, setHeaderType] = useState(HeaderType.WHITE);
    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const onContainerScroll = (e: any) => {
      if (e.target.scrollTop > 50) setHeaderType(HeaderType.BLACK);
      else setHeaderType(HeaderType.WHITE);
    };

    const toggleMenu = () => {
      console.log("AA");
      setShowMenu(!showMenu);
    };

    const onLogoutClick = () => {};

    const onMenuItemClick = (route: string) => {
      if (props.history) {
        props.history.push(route);
      }
    };

    const onLoginClick = () => setShowLogin(!showLogin);

    const onFacebookAccountClick = () => {};

    const onGoogleAccountClick = () => {};

    return (
      <div
        className="home-screen"
        onScroll={(e: React.SyntheticEvent) =>
          throttle(onContainerScroll, 100)(e)
        }
      >
        {showMenu && (
          <Menu
            categories={categories}
            userMenuOptions={userMenuOptions}
            onLogoutClick={onLogoutClick}
            onClose={toggleMenu}
            onMenuItemClick={onMenuItemClick}
          />
        )}

        {showLogin && (
          <Login
            onFacebookAccountClick={onFacebookAccountClick}
            onGoogleAccountClick={onGoogleAccountClick}
            onClose={onLoginClick}
          />
        )}

        <Header
          type={headerType}
          onMenuButtonClick={toggleMenu}
          isAuthenticated={true}
          onLoginClick={onLoginClick}
          onCartIconClick={() => props.history.push("/cart")}
        />
        <ScreenComponent {...props} />
        <Footer />
      </div>
    );
  };
};
