import * as React from "react";
import userIcon from "../../assets/images/user.svg";
import { MENU_GREETING_TEXT } from "../../AppConstants";
interface IMenuUserDetailsProps {
  name: any;
}

export const MenuUserDetails = ({
  name,
}: IMenuUserDetailsProps): JSX.Element => {
  return (
    <div className="menu-user d-flex">
      <div className="menu-user-icon d-flex">
        <img src={userIcon} alt="User Icon" />
      </div>
      <div className="menu-user-text">
        <h3>
          {MENU_GREETING_TEXT} {name}
        </h3>
      </div>
    </div>
  );
};
