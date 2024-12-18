import { useEffect, useState } from "react";

import { FaEnvelopeOpenText, FaCommentDots, FaLightbulb } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

import { Btn3Hamburgues } from "@btn";
import { A } from "@nano";

import Nav from "./Navs/Nav";

import LogoMarca from "@imgSVG/Logo";
import scrollHeader from "../../../../../sistema-administrativo-para-escuela/src/components/layout/header/HeaderFn/scrollHeader";

interface HeaderLandingLeftProps {}

// Definir los elementos del header
const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };
const menuItems = [
  { href: "/", label: "Inicio", icon: <TiHome /> },
  { href: "#quienes-somos", label: "Quiénes Somos", icon: <FaCommentDots /> },
  { href: "#servicios", label: "Servicios", icon: <FaLightbulb /> },
  { href: "#proyectos", label: "Proyectos", icon: <GoFileDirectoryFill /> },
  { href: "#precios", label: "Precios", icon: <FaHandHoldingDollar /> },
  { href: "#contacto", label: "Contacto", icon: <FaEnvelopeOpenText /> },
];

/* const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
]; */

const HeaderLandingLeft: React.FC<HeaderLandingLeftProps> = () => {
  const [isActive, setIsActive] = useState(false);

  const Logo = () => {
    return (
      <div className="container-logo">
        <A href={home.href}>
          <LogoMarca />
        </A>
      </div>
    );
  };

  useEffect(() => {
    window.onscroll = () => {
      scrollHeader();
    };
  }, []);

  return (
    <>
      <header className="header landing-left">
        <div className="desktop" id="desktopHeader">
          <Logo />
          <Nav menuItems={menuItems} />
          <Btn3Hamburgues
            className={"btn-desktop"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
        <Nav
          menuItems={menuItems}
          className="nav-xs"
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </header>
    </>
  );
};

export default HeaderLandingLeft;
