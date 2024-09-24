import HeaderLandingLeft from "../../layout/headers/HeaderLandingLeft";

interface LandingLeftProps {
  children: React.ReactNode;
  where?: string;
}

const LandingLeft: React.FC<LandingLeftProps> = ({ children, where }) => {
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

export default LandingLeft;
