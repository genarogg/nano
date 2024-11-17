import HeaderLandingCenter from "../../layout/headers/HeaderLandingCenter";

interface LandingCenterProps {
  children: React.ReactNode;
  where?: string;
}

const LandingCenter: React.FC<LandingCenterProps> = ({ children, where }) => {
  return (
    <div className={`${where} wrapper`}>
      <HeaderLandingCenter />
      <main className="main">{children}</main>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default LandingCenter;
