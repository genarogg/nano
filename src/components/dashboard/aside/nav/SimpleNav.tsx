import React, { useContext, useState } from 'react';
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Icono } from "@nano";
import { BtnNormalBasic } from "@btn";
import { GlobalStateContext } from "@redux";

import Separador from "../separador/Separador";

interface SimpleNavProps {}

const SimpleNav: React.FC<SimpleNavProps> = () => {
  const { dispatch } = useContext(GlobalStateContext);
  const [selectedContext, setSelectedContext] = useState<string | null>(null);

  const handleChangeContext = (newContext: string) => {
    dispatch({ type: "SET_CONTEXT", payload: newContext });
    setSelectedContext(newContext);
  };

  const navSections = [
    {
      title: "Hola",
      items: [
        { context: "newContext1", text: "hola", icon: <FaHandHoldingDollar /> },
        { context: "newContext2", text: "hola", icon: <FaHandHoldingDollar /> },
        { context: "newContext3", text: "hola", icon: <FaHandHoldingDollar /> },
      ],
    },
    {
      title: "Hola",
      items: [
        { context: "newContext12", text: "hola", icon: <FaHandHoldingDollar /> },
        { context: "newContext22", text: "hola", icon: <FaHandHoldingDollar /> },
        { context: "newContext32", text: "hola", icon: <FaHandHoldingDollar /> },
      ],
    },
    {
      title: "Hola",
      items: [
        { context: "newContext13", text: "hola", icon: <FaHandHoldingDollar /> },
        { context: "newContext23", text: "hola", icon: <FaHandHoldingDollar /> },
        { context: "newContext33", text: "hola", icon: <FaHandHoldingDollar /> },
      ],
    },
  ];

  return (
    <div className="container-nav-simple">
      {navSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="title-nav">
            <h4>{section.title}</h4>
          </div>
          <nav>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <BtnNormalBasic
                    className={
                      selectedContext === item.context ? "selected" : ""
                    }
                    onClick={() => handleChangeContext(item.context)}
                  >
                    <Icono icono={item.icon} />
                    <div className="text">{item.text}</div>
                  </BtnNormalBasic>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default SimpleNav;
