import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Initial from "./components/Initial";

import { GlobalStateContext } from "@components/state/Redux";

interface MainSimpleProps {

}

const MainSimple: React.FC<MainSimpleProps> = ({}) => {
  const renderComponent = () => {
    switch (context) {
      case "initial":
        return <Initial setContext={setContext} />;
      case "mis-datos":
        return <Perfil />;
      default:
        return <Demo />;
    }
  };

  return (
    <SwitchTransition>
      <CSSTransition key={context} timeout={500} classNames="fade">
        {renderComponent()}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default MainSimple;
