interface FooterNavSimpleProps {}

const FooterNavSimple: React.FC<FooterNavSimpleProps> = () => {
  return (
    <>
      <footer className="nav-footer">
        <button className="cerrar-sesion">
          <h2>Cerrar sesión</h2>
        </button>
      </footer>
    </>
  );
};

export default FooterNavSimple;
