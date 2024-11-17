import { A } from "@nano"

interface indexProps { }

const index: React.FC<indexProps> = () => {
  return (
    <div className="home">
      <A href="/headers">headers</A>
    </div>
  );
};

export default index;
