import * as React from "react";
import userIcon from "../../assets/images/user.svg";

interface IMenuUserDetailsProps {}

export const MenuUserDetails = (props: IMenuUserDetailsProps): JSX.Element => {
  return (
    <div className="menu-user d-flex">
      <div className="menu-user-icon d-flex">
        <img src={userIcon} alt="User Icon" />
      </div>
      <div className="menu-user-text">
        <h3>Hey Ayush</h3>
      </div>
    </div>
  );
};
