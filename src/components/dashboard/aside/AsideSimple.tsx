import SimpleNav from "./nav/SimpleNav";
import TituloNavSimple from "./titulo/TituloNavSimple";
import FooterNavSimple from "./footer/FooterNavSimple";

interface AsideSimpleProps {}

const AsideSimple: React.FC<AsideSimpleProps> = () => {
  return (
    <aside className="simple-aside">
      <TituloNavSimple />
      <SimpleNav />
      <FooterNavSimple />
    </aside>
  );
};

export default AsideSimple;
