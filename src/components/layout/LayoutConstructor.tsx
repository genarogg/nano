import HeaderLanding from "./headers/HeaderLanding";

interface LayoutConstructorProps {
  children: React.ReactNode;
}

const LayoutConstructor: React.FC<LayoutConstructorProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderLanding />
      <main className="main">{children}</main>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default LayoutConstructor;
