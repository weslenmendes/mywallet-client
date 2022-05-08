import { useState } from "react";

import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

import { singIn } from "./../../services/api.js";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await singIn(form);
      console.log(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>MyWallet</h1>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="E-mail"
          disabled={loading}
          required
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Senha"
          disabled={loading}
          required
        />
        <Button type="submit" isLoading={loading} disabled={loading}>
          Entrar
        </Button>
        <TextButton>Primeira vez? Cadastre-se!</TextButton>
      </form>
    </Container>
  );
};

export { SignIn };
