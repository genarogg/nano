import { A } from "@nano";

A;

interface HeaderSimpleDBProps {}

const HeaderSimpleDB: React.FC<HeaderSimpleDBProps> = () => {
  return (
    <>
      <header className="header-simple-db">
        <div className="ruta">
          <div className="ruta-completa">
            <h6>
              <A href="/">hola</A> / <A href="/">hola</A> / <A href="/">hola</A>
            </h6>
          </div>
          <div className="name-component">
            <h4>Dashboard</h4>
          </div>
        </div>
        <div className="container-nav">
          <nav>
            <ul>
              <li>
                <button>Button 1</button>
              </li>
              <li>
                <button>Button 2</button>
              </li>
              <li>
                <button>Button 3</button>
              </li>
              <li>
                <button>Button 4</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderSimpleDB;
