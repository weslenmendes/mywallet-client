import GlobalStyle from "./styles/GlobalStyle";

import AuthProvider from "./providers/AuthProvider";

import Routes from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}
