import React, { useState, useEffect } from "react";
import {
  Header,
  HeaderType,
  Footer,
  Menu,
  Login,
  Modal,
  ConfirmationPopup,
  AppLoader,
} from "../components";

import { signOut } from "../Auth";
import { fetchProducts } from "../store/actions";
import { categories, userMenuOptions } from "../mockData";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithPhoneNumber,
} from "../Auth";
import { throttle, PopupUtility } from "../utilities";

export const withContainer = (ScreenComponent: any) => {
  return function (props: any) {
    const [headerType, setHeaderType] = useState(HeaderType.WHITE);
    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [authError, setAuthError]: any = useState(null);

    const onContainerScroll = (e: any) => {
      if (e.target.scrollTop > 50) setHeaderType(HeaderType.BLACK);
      else setHeaderType(HeaderType.WHITE);
    };

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    const onLogoutClick = () => {
      PopupUtility(ConfirmationPopup, {
        message: "Are you sure you want to Logout",
      }).then(() => {
        signOut();
        setShowMenu(false);
      });
    };

    const onMenuItemClick = (route: string) => {
      if (props.history) {
        props.history.push(route);
      }
    };

    const onLoginClick = () => {
      setAuthError(null);
      setShowLogin(!showLogin);
    };

    const onFacebookAccountClick = async () => {
      setAuthError(null);
      try {
        await signInWithFacebook();
      } catch (e) {
        setAuthError(`${e.message} Email : ${e.email}`);
      }
    };

    const onGoogleAccountClick = async () => {
      setAuthError(null);
      try {
        await signInWithGoogle();
      } catch (error) {
        setAuthError(`${error.message}`);
      }
    };

    const onSearchOptionClick = (id: number) => {
      props.history.push(`/product-details/${id}`);
    };

    useEffect(() => {
      if (localStorage && localStorage.getItem("loginLoaded"))
        setShowLogin(false);
      else {
        setShowLogin(true);
        localStorage.setItem("loginLoaded", "1");
      }
    }, [props.authenticated]);

    useEffect(() => {
      if (!props?.productList) fetchProducts();
    }, []);

    return (
      <div
        className="home-screen"
        onScroll={(e: React.SyntheticEvent) =>
          throttle(onContainerScroll, 100)(e)
        }
      >
        {props.networkActivity.inProgress && <AppLoader />}
        {showMenu && (
          <Menu
            categories={categories}
            userMenuOptions={userMenuOptions}
            onLogoutClick={onLogoutClick}
            onClose={toggleMenu}
            onMenuItemClick={onMenuItemClick}
            isAuthenticated={!!props.authenticated}
          />
        )}

        {showLogin && !props.authenticated && (
          <Modal>
            <Login
              onFacebookAccountClick={onFacebookAccountClick}
              onGoogleAccountClick={onGoogleAccountClick}
              onClose={onLoginClick}
              sendOtp={(phoneNumber: any) => signInWithPhoneNumber(phoneNumber)}
              error={authError}
            />
          </Modal>
        )}

        <Header
          type={headerType}
          onMenuButtonClick={toggleMenu}
          isAuthenticated={props.authenticated}
          onLoginClick={onLoginClick}
          onCartIconClick={() => props.history.push("/cart")}
          allProducts={props?.productList || []}
          cartItemCount={props.cart.length}
          navigateToRoute={props.history.push}
        />
        <ScreenComponent {...props} />
        <Footer />
      </div>
    );
  };
};
