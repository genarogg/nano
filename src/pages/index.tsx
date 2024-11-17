import { A } from "@nano"

interface indexProps { }

const index: React.FC<indexProps> = () => {
  return (
    <div className="home">
      <A href="/headers">headers</A>
      <A href="/buttons">buttons</A>
      <A href="/inputs">inputs</A>
    </div>
  );
};

export default index;
