interface Btn2HamburguesProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

const Btn2Hamburgues: React.FC<Btn2HamburguesProps> = ({
  fn,
  isActive,
  setIsActive,
}) => {
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        fn && fn();
      }}
      className={`hamburguer2 ${isActive ? "active" : ""}`}
    >
      <span></span>
    </button>
  );
};

export default Btn2Hamburgues;
