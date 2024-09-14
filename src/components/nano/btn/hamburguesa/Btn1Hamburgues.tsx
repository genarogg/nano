interface Btn1HamburguesProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

const Btn1Hamburgues: React.FC<Btn1HamburguesProps> = ({
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
      className={`hamburguer1 btnMenu ${isActive ? "active" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Btn1Hamburgues;
