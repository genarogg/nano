import { useState } from "react";

import { Input } from "@form";
import { CheckboxBasic } from "@btn";

interface LoginBasicProps {}

const LoginBasic: React.FC<LoginBasicProps> = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    remember: false,
    loading: false,
  });

  return (
    <form className="form-basic login">
      <Input
        type="text"
        placeholder="Username"
        name="userName"
        value={formData.userName}
        valueChange={(e) =>
          setFormData({ ...formData, userName: e.target.value })
        }
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        valueChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
      <CheckboxBasic
        text="Recuerdame"
        valueChange={(e) =>
          setFormData({ ...formData, remember: e.target.checked })
        }
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginBasic;
