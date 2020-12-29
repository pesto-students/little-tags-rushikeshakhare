import React, { Component } from "react";
import { AppLoader } from "../components";
import { auth } from "../services/firebase";
import { Application } from "../Application";
import { showToast } from "../utilities";

export const withAuth = (AppComponent: any) => {
  return class AuthWrapper extends Component<any, any> {
    state = {
      authenticated: false,
      loading: true,
    };

    componentDidMount() {
      auth().onAuthStateChanged((user) => {
        if (user) {
          showToast(`Logged In as ${user.displayName}`);
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
        } else {
          this.setState({
            authenticated: false,
            loading: false,
          });
        }
      });
    }

    render(): JSX.Element {
      const { loading } = this.state;
      return (
        <>
          <div id="toast" />
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
