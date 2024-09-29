import { MenuToolTip } from "@nano";
import "reactjs-popup/dist/index.css";

interface LogoORuserProps {}

const LogoORuser: React.FC<LogoORuserProps> = () => {
  const items = ["Item 2", "Item 3", "Item 4"];

  return (
    <div className="container-logo-user">
      <MenuToolTip items={items}>
        <div className="logo">
          <img
            src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
            alt="logo"
          />
        </div>
      </MenuToolTip>
    </div>
  );
};

export default LogoORuser;
