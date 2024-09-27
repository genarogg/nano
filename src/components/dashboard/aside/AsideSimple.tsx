import SimpleNav from "./nav/SimpleNav";
import Separador from "./separador/Separador";

interface AsideSimpleProps {}

const AsideSimple: React.FC<AsideSimpleProps> = () => {
  return (
    <aside className="simple-aside">
      <div className="tilte">
        <h2>SimpleDB</h2>
        <Separador />
      </div>

      <SimpleNav />
    </aside>
  );
};

export default AsideSimple;
