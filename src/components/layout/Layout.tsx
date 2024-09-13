import LayoutConstructor from "./LayoutConstructor";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutConstructor>{children}</LayoutConstructor>;
};

export default Layout;
