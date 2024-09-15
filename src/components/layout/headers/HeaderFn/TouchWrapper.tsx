import React, { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

interface TouchNavProps {
  children: ReactNode;
}

const TouchNav: React.FC<TouchNavProps> = ({ children }) => {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(
    ({ down, movement: [mx], memo = x.get() }) => {
      api.start({ x: down ? mx + memo : 0 });
      return memo;
    },
    { pointer: { touch: true } } // Asegura que los eventos touch estén habilitados
  );

  return (
    <animated.div style={{ x }} {...bind()}>
      {children}
    </animated.div>
  );
};

export default TouchNav;
