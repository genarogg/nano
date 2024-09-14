import { useState } from "react";

import { Btn1Hamburgues, Btn2Hamburgues, Btn3Hamburgues } from "@btn";

interface botonesProps {}

const botones: React.FC<botonesProps> = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="container-btn"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        justifyItems: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Btn1Hamburgues isActive={isActive} setIsActive={setIsActive} />
      <Btn2Hamburgues isActive={isActive} setIsActive={setIsActive} />
      <Btn3Hamburgues isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default botones;
