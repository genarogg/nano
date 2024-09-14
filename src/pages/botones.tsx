import { useState } from "react";

import { Btn1Hamburgues, Btn2Hamburgues } from "@btn";

interface botonesProps {}

const botones: React.FC<botonesProps> = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="container-btn"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <Btn1Hamburgues isActive={isActive} setIsActive={setIsActive} /> */}
      <Btn2Hamburgues isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default botones;
