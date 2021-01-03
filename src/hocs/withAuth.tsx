import React, { Component } from "react";
import { AppLoader } from "../components";
import { firebase } from "../services/firebase";
import { Application } from "../Application";
import { showToast } from "../utilities";
import { TOAST_CONTAINER_ID } from "../AppConfig";
import { LOGGED_IN_MESSAGE } from "../AppConstants";

export const withAuth = (AppComponent: any) => {
  return class AuthWrapper extends Component<any, any> {
    state = {
      authenticated: false,
      loading: true,
    };

    onAuthSuccess = (user: any) => {
      showToast(LOGGED_IN_MESSAGE(user.displayName));

      Application.getInstance().UserData = {
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
      };

      if (!user.displayName) {
        user.updateProfile({ displayName: "Rushikesh Akhare" });
      }
      this.setState({
        authenticated: true,
        loading: false,
      });
    };

    onAuthFailed = () =>
      this.setState({
        authenticated: false,
        loading: false,
      });

    componentDidMount() {
      firebase.firebaseAuth().onAuthStateChanged((user: any) => {
        if (user) return this.onAuthSuccess(user);
        else return this.onAuthFailed();
      });
    }

    render(): JSX.Element {
      const { loading } = this.state;
      return (
        <>
          <div id={TOAST_CONTAINER_ID} />
          {loading ? (
            <AppLoader />
          ) : (
            <AppComponent {...this.state} {...this.props} />
          )}
        </>
      );
    }
  };
};
