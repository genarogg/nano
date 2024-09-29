import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Importa los estilos de tippy.js
import Separador from "@components/dashboard/layout/aside/separador/Separador";

interface MenuToolTipProps {
  children: React.ReactNode;
  items: string[] | React.ReactNode[] | undefined;
  className?: string;
}

const MenuToolTip: React.FC<MenuToolTipProps> = ({
  children,
  items,
  className = "",
}) => {
  return (
    <div className={`container-menu-tooltip ${className}`}>
      <Tippy
        content={
          <ul>
            {items &&
              items.map((item, index) => (
                <li key={index}>
                  {item}
                  <Separador />
                </li>
              ))}
          </ul>
        }
        interactive={true}
        animation="fade"
        trigger="click"
        className="tooltip"
        arrow={true}
        
      >
        <button>{children}</button>
      </Tippy>
    </div>
  );
};

export default MenuToolTip;
