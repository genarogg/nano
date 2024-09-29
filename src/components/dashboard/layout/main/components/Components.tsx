import Initial from "./Initial";

// @iconos
import { HiHome } from "react-icons/hi";
import { PiTableThin } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

const components = [
  {
    titleSecction: "inicio",
    elements: [
      {
        component: Initial,
        context: "Inicio",
        icon: <HiHome />,
      },
    ],
  },
  {
    titleSecction: "Tablas",
    elements: [
      {
        component: Initial,
        context: "mis datos",
        icon: <PiTableThin />,
      },
      {
        component: Initial,
        context: "mis da2tos",
        icon: <PiTableThin />,
      },
    ],
  },
  {
    titleSecction: "bitacora",
    elements: [
      {
        component: Initial,
        context: "bitacora",
        icon: <FaCalendarAlt />,
      },
      {
        component: Initial,
        context: "datos",
        icon: <FaCalendarAlt />,
      },
    ],
  },
];

export { components };
