import { useEffect, useState } from "react";

import Logo from "./Logo/Logo";
import { FaEnvelopeOpenText, FaCommentDots, FaLightbulb } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

import { Btn3Hamburgues } from "@btn";

import Nav from "./Navs/Nav";

import scrollHeader from "./HeaderFn/scrollHeader";

interface HeaderLandingCenterProps {}

// Definir los elementos del header
const menuItemsLeft = [
  { href: "/", label: "Inicio", icon: <TiHome /> },
  { href: "#quienes-somos", label: "Quiénes Somos", icon: <FaCommentDots /> },
  { href: "#servicios", label: "Servicios", icon: <FaLightbulb /> },
];

const menuItemsRight = [
  { href: "#", label: "Proyectos", icon: <GoFileDirectoryFill /> },
  { href: "#", label: "Precios", icon: <FaHandHoldingDollar /> },
  { href: "#", label: "Contacto", icon: <FaEnvelopeOpenText /> },
];

const HeaderLandingCenter: React.FC<HeaderLandingCenterProps> = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      scrollHeader();
    };
  }, []);

  return (
    <>
      <header className="header landing-center">
        <div className="desktop" id="desktopHeader">
          <Nav menuItems={menuItemsLeft} />
          <Logo />
          <Nav menuItems={menuItemsRight} />
          <Btn3Hamburgues
            className={"btn-desktop"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
        {/*  <Nav
          menuItems={menuItems}
          className="nav-xs"
          isActive={isActive}
          setIsActive={setIsActive}
        /> */}
      </header>
    </>
  );
};

export default HeaderLandingCenter;
