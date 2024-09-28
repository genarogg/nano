import { GlobalStateProvider, GlobalStateContext } from "@redux";
import AsideSimple from "../aside/AsideSimple";
import { useContext } from "react";
interface LayoutSimpleDBProps {
  children: React.ReactNode;
}

const LayoutSimpleDB: React.FC<LayoutSimpleDBProps> = ({ children }) => {
  const { state } = useContext(GlobalStateContext);
  return (
    <GlobalStateProvider>
      <div
        className={`simple-db ${state.active_aside ? "additional-class" : ""}`}
      >
        <AsideSimple />
        <div className="container-simple">
          <header className="header-simple">Header</header>
          <main className="main-simple">{children}</main>
        </div>
      </div>
      {/* <footer className="footer-simple">Footer</footer> */}
    </GlobalStateProvider>
  );
};

export default LayoutSimpleDB;
