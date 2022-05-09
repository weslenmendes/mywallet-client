import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

import { signUp } from "../../services/api";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = (props) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      setLoading(false);
      alert("Senha de confirmação é diferente da senha");
      return;
    }

    const data = {
      ...form,
    };

    delete data.confirmPassword;

    signUp(data)
      .then((res) => {
        setLoading(false);
        if (res.status === 201) navigate("/");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const changeColor = () => {
    if (form.password && form.confirmPassword) {
      if (form.password === form.confirmPassword) {
        return "#03AC00";
      } else {
        return "#c70000";
      }
    }

    return "transparent";
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>MyWallet</h1>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Nome"
          disabled={loading}
          required
        />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="E-mail"
          disabled={loading}
          required
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Senha"
          disabled={loading}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirme a senha"
          disabled={loading}
          borderColor={changeColor()}
          required
        />
        <Button type="submit" isLoading={loading}>
          Cadastrar
        </Button>
      </form>
      <TextButton onClick={() => navigate("/")}>
        Já tem uma conta? Entre agora!
      </TextButton>
    </Container>
  );
};

export { SignUp };
