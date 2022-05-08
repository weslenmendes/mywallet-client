import { useState } from "react";

import AuthContext from "../contexts/AuthContext";

import { getItem, setItem } from "./../utils";

export default function AuthProvider(props) {
  const persistedAuth = getItem("auth");
  const [auth, setAuth] = useState(persistedAuth);

  const handleAuth = (authData) => {
    setAuth(authData);
    setItem("auth", authData);
  };

  return (
    <AuthContext.Provider value={{ auth, handleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
