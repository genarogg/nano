import Layout from "@layout";

import { LoginBasic } from "@formSkeleton";

interface FormBasicProps {}

const FormBasic: React.FC<FormBasicProps> = () => {
  return (
    <Layout>
      <LoginBasic />
    </Layout>
  );
};

export default FormBasic;
