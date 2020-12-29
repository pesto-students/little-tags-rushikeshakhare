import React, { Component } from "react";
import { AppLoader } from "../components";
import { auth } from "../services/firebase";
import { Application } from "../Application";

export const withAuth = (AppComponent: any) => {
  return class AuthWrapper extends Component<any, any> {
    state = {
      authenticated: false,
      loading: true,
    };

    componentDidMount() {
      auth().onAuthStateChanged((user) => {
        if (user) {
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
