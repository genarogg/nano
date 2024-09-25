import LayoutConstructor from "./LayoutConstructor";
import { ToastContainer } from "react-toastify";
interface LayoutProps {
  children: React.ReactNode;
  where?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, where = "" }) => {
  return (
    <LayoutConstructor where={where}>
      {children}
      <ToastContainer />
    </LayoutConstructor>
  );
};

export default Layout;
