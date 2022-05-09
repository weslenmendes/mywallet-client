import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./../../components/Container";
import { Box } from "./../../components/Box";
import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { Separator } from "./../../components/Separator";

import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";

import AuthContext from "./../../contexts/AuthContext";

import { addEntry } from "./../../services/api.js";

const initialState = {
  amount: 0,
  description: "",
  type: "out",
};

const NewExit = (props) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate("/", { replace: true });
    }
  }, [auth, navigate]);

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { ...form, amount: parseFloat(form.amount) };

    if (auth) {
      addEntry(auth.token, data)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            navigate("/wallet");
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e.response.data);
        });
    }
  };

  return (
    <Container justifyContent="start">
      <Box>
        <h2>Nova saída</h2>
        <button onClick={() => navigate("/wallet")}>
          <CloseIcon title="Fechar" className="close-icon" />
        </button>
      </Box>
      <Separator width="100%" height="25px" />
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="number"
          name="amount"
          onChange={handleChange}
          value={form.amount}
          placeholder="Valor"
          disabled={loading}
          required
        />
        <Input
          type="text"
          name="description"
          onChange={handleChange}
          value={form.description}
          placeholder="Descrição"
          disabled={loading}
          required
        />
        <Button isLoading={loading}>Salvar saída</Button>
      </form>
    </Container>
  );
};

export { NewExit };
