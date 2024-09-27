import { FaHandHoldingDollar } from "react-icons/fa6";
import { Icono } from "@nano";
import { BtnNormalBasic } from "@btn";

interface SimpleNavProps {}

const SimpleNav: React.FC<SimpleNavProps> = () => {
  return (
    <>
      <div className="container-nav-simple">
        <div className="title-nav">
          <h4>Hola</h4>
        </div>
        <nav>
          <ul>
            <li>
              <BtnNormalBasic>
                <Icono icono={<FaHandHoldingDollar />} />
                <div className="text">hola</div>
              </BtnNormalBasic>
            </li>
            <li>
              <BtnNormalBasic>
                <Icono icono={<FaHandHoldingDollar />} />
                <div className="text">hola</div>
              </BtnNormalBasic>
            </li>
            <li>
              <BtnNormalBasic>
                <Icono icono={<FaHandHoldingDollar />} />
                <div className="text">hola</div>
              </BtnNormalBasic>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SimpleNav;
