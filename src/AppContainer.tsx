import React, { useState, useEffect } from "react";
import {
  HeaderType,
  ConfirmationPopup,
  AppLoader,
  Menu,
  Modal,
  Login,
  Header,
  Footer,
} from "./components";
import { PopupUtility, throttle } from "./utilities";
import { firebase } from "./services/firebase";
import { fetchProducts } from "./store/actions";
import { categories, userMenuOptions } from "./mockData";
import { connect } from "./store";
import { withRouter } from "react-router-dom";

interface IAppContainerProps {
  children: JSX.Element | JSX.Element[];
  authenticated: boolean;
  history: any;
  networkActivity: any;
  cart: any;
  productList: any;
}

export const AppContainer = withRouter<any, any>(
  connect()<any>((props: IAppContainerProps) => {
    const {
      children,
      authenticated,
      history,
      networkActivity,
      cart,
      productList,
    } = props;

    const [headerType, setHeaderType] = useState<HeaderType>(HeaderType.WHITE);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [authError, setAuthError] = useState<any>(null);

    const onContainerScroll = (e: React.BaseSyntheticEvent) => {
      if (e.target.scrollTop > 50) setHeaderType(HeaderType.BLACK);
      else setHeaderType(HeaderType.WHITE);
    };

    const toggleMenu = (): void => {
      setShowMenu(!showMenu);
    };

    const onLogoutClick = () => {
      PopupUtility(ConfirmationPopup, {
        message: "Are you sure you want to Logout", //  put in constants
      }).then(() => {
        firebase.signOut();
        setShowMenu(false);
      });
    };

    const onMenuItemClick = (route: string) => {
      if (history) {
        history.push(route);
      }
    };

    const onLoginClick = () => {
      setAuthError(null);
      setShowLogin(!showLogin);
    };

    const onFacebookAccountClick = async () => {
      setAuthError(null);
      try {
        await firebase.signInWithFacebook();
      } catch (e) {
        setAuthError(`${e.message} Email : ${e.email}`);
      }
    };

    const onGoogleAccountClick = async () => {
      setAuthError(null);
      try {
        await firebase.signInWithGoogle();
      } catch (error) {
        setAuthError(`${error.message}`);
      }
    };

    useEffect(() => {
      if (localStorage && localStorage.getItem("loginLoaded"))
        setShowLogin(false);
      else {
        setShowLogin(true);
        localStorage.setItem("loginLoaded", "1");
      }
    }, [authenticated]);

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
        {networkActivity.inProgress && <AppLoader />}
        {showMenu && (
          <Menu
            categories={categories}
            userMenuOptions={userMenuOptions}
            onLogoutClick={onLogoutClick}
            onClose={toggleMenu}
            onMenuItemClick={onMenuItemClick}
            isAuthenticated={!!authenticated}
          />
        )}

        {showLogin && !authenticated && (
          <Modal>
            <Login
              onFacebookAccountClick={onFacebookAccountClick}
              onGoogleAccountClick={onGoogleAccountClick}
              onClose={onLoginClick}
              sendOtp={(phoneNumber: any) =>
                firebase.signInWithPhoneNumber(phoneNumber)
              }
              error={authError}
            />
          </Modal>
        )}

        <Header
          type={headerType}
          onMenuButtonClick={toggleMenu}
          isAuthenticated={authenticated}
          onLoginClick={onLoginClick}
          onCartIconClick={() => history.push("/cart")}
          allProducts={productList || []}
          cartItemCount={cart.length}
          navigateToRoute={history.push}
        />
        {children}
        <Footer />
      </div>
    );
  })
);
