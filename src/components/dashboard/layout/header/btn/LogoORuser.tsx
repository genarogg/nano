import { A } from "@nano";
import { MenuToolTip } from "@tooltip";
import React, { useContext } from "react";
import { GlobalStateContext, ActionTypes } from "@redux";

interface LogoORuserProps {}

const LogoORuser: React.FC<LogoORuserProps> = () => {
  const { dispatch } = useContext(GlobalStateContext);

  const handleReset = () => {
    dispatch({ type: ActionTypes.RESET_STATE });
    A({ href: "/", type: "push" });
  };

  const items = [
    <button key={1} onClick={handleReset}>
      cerrar sesion
    </button>,
  ];

  return (
    <div className="container-logo-user">
      <MenuToolTip items={items}>
        <div className="logo">
          <img
            src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
            alt="logo"
          />
        </div>
      </MenuToolTip>
    </div>
  );
};

export default LogoORuser;
