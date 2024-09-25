import { useState } from "react";

import { Input } from "@form";
import { CheckboxBasic, BtnSubmitBasic, BtnText } from "@btn";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import { submitLogin } from "../fnForm";

interface LoginBasicProps {}

const LoginBasic: React.FC<LoginBasicProps> = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    remember: false,
    loading: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });
    submitLogin({ formData, setFormData });
  };

  return (
    <div className="container-form">
      <form className="form-basic login" onSubmit={onSubmit}>
        <h4 className="title">Iniciar Sesion</h4>
        <Input
          type="text"
          placeholder="Username"
          name="userName"
          icono={<BsEnvelopeFill />}
          value={formData.userName}
          valueChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          icono={<MdLock />}
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
        <BtnSubmitBasic text="Iniciar sesion" loading={formData.loading} />
        <BtnText text="Olvidaste tu contraseña?" onClick={() => {}} />
      </form>
    </div>
  );
};

export default LoginBasic;
