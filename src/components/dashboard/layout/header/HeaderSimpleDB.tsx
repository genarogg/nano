import { A } from "@nano";

import LogoORuser from "./btn/LogoORuser";

interface HeaderSimpleDBProps {}

const HeaderSimpleDB: React.FC<HeaderSimpleDBProps> = () => {
  const cantidadDeItems = 2;

  return (
    <>
      <header className="header-simple-db">
        <div className="left">
          <div className="ruta">
            <div className="ruta-completa">
              <h6>
                <A href="/">hola</A> / <A href="/">hola</A> /{" "}
                <A href="/">hola</A>
              </h6>
            </div>
            <div className="name-component">
              <h4>Dashboard</h4>
            </div>
          </div>
        </div>

        <div className="right ">
          <div className="container-nav">
            <nav>
              <ul
                style={{
                  gridTemplateColumns: `repeat(${cantidadDeItems}, 1fr)`,
                }}
              >
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
              </ul>
            </nav>
          </div>
          <LogoORuser />
        </div>
      </header>
    </>
  );
};

export default HeaderSimpleDB;
