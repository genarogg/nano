interface LayoutConstructorProps {
  children: React.ReactNode;
}

const LayoutConstructor: React.FC<LayoutConstructorProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <header className="header">
        <p>header</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default LayoutConstructor;
