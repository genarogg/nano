interface Btn3HamburguesProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

const Btn3Hamburgues: React.FC<Btn3HamburguesProps> = ({
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
      className={`hamburguer3 ${isActive ? "active" : ""}`}
    >
      <span className="hamburguer">
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
      </span>
    </button>
  );
};

export default Btn3Hamburgues;
