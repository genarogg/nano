import React, { useEffect, useState, useContext } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { GlobalStateContext } from "@components/state/Redux";
import { components } from "./components/Components";

interface MainSimpleProps {}

const MainSimple: React.FC<MainSimpleProps> = () => {
  const [context, setContext] = useState<string | null>("inicio");

  const { state } = useContext(GlobalStateContext);

  useEffect(() => {
    setContext(components[0].elements[0].context);
  }, []);

  const renderComponent = () => {
    switch (state.context) {
      case components[0].elements[0].context:
        return React.createElement(components[0].elements[0].component);
      default:
        return <p>d</p>;
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
