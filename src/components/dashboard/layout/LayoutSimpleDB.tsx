import { GlobalStateProvider } from "@redux";
import AsideSimple from "../aside/AsideSimple";
interface LayoutSimpleDBProps {
  children: React.ReactNode;
}

const LayoutSimpleDB: React.FC<LayoutSimpleDBProps> = ({ children }) => {
  return (
    <GlobalStateProvider>
      <div className="simple-db">
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
