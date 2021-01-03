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
import {
  LOGGED_OUT_MESSAGE,
  LOGOUT_CONFIRMATION_MESSAGE,
} from "./AppConstants";
import {
  CONTAINER_SCROLL_THROTTLE_TIME,
  HEADER_SCROLL_THRESHOLD,
  ROUTES,
  LOGIN_LOADED_STORAGE_KEY,
} from "./AppConfig";
import { PopupUtility, throttle, showToast, StorageManager } from "./utilities";
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
      if (e.target.scrollTop > HEADER_SCROLL_THRESHOLD)
        setHeaderType(HeaderType.BLACK);
      else setHeaderType(HeaderType.WHITE);
    };

    const toggleMenu = (): void => {
      setShowMenu(!showMenu);
    };

    const onLogoutClick = () => {
      PopupUtility(ConfirmationPopup, {
        message: LOGOUT_CONFIRMATION_MESSAGE,
      }).then(() => {
        showToast(LOGGED_OUT_MESSAGE);
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
      if (StorageManager.get(LOGIN_LOADED_STORAGE_KEY)) setShowLogin(false);
      else {
        setShowLogin(true);
        StorageManager.set(LOGIN_LOADED_STORAGE_KEY, "1");
      }
    }, [authenticated]);

    useEffect(() => {
      if (!props?.productList) fetchProducts();
    }, []);

    return (
      <div
        className="home-screen"
        onScroll={(e: React.SyntheticEvent) =>
          throttle(onContainerScroll, CONTAINER_SCROLL_THROTTLE_TIME)(e)
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
          onCartIconClick={() => history.push(ROUTES.CART)}
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
