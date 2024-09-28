import SimpleNav from "./nav/SimpleNav";
import TituloNavSimple from "./titulo/TituloNavSimple";

interface AsideSimpleProps {}

const AsideSimple: React.FC<AsideSimpleProps> = () => {
  return (
    <aside className="simple-aside">
      <TituloNavSimple />
      <SimpleNav />
      
    </aside>
  );
};

export default AsideSimple;
