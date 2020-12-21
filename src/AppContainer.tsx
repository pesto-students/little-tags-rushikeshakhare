import * as React from "react";
import { useState } from "react";
import { categories, userMenuOptions } from "./mockData";
import { Header, HeaderType, Footer, Menu, Login } from "./components";
import { throttle } from "./utilities";

export const AppContainer = ({ children }: any) => {
  const [headerType, setHeaderType] = useState(HeaderType.WHITE);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const onContainerScroll = (e: any) => {
    if (e.target.scrollTop > 50) setHeaderType(HeaderType.BLACK);
    else setHeaderType(HeaderType.WHITE);
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  const onLogoutClick = () => {};

  const onMenuItemClick = () => {};

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
      />
      {children}
      <Footer />
    </div>
  );
};
