import HeaderLandingLeft from "./headers/HeaderLandingLeft";

interface LayoutConstructorProps {
  children: React.ReactNode;
  where?: string;
}

const LayoutConstructor: React.FC<LayoutConstructorProps> = ({
  children,
  where,
}) => {
  return (
    <div className={`${where} wrapper`}>
      <HeaderLandingLeft />
      <main className="main">{children}</main>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default LayoutConstructor;
