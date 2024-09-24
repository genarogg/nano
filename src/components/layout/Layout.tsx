import LayoutConstructor from "./LayoutConstructor";

interface LayoutProps {
  children: React.ReactNode;
  where?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, where = "" }) => {
  return <LayoutConstructor where={where}>{children}</LayoutConstructor>;
};

export default Layout;
