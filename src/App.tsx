import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { RoutesComponents } from "./routes";
import { CartContextProvider } from "./context";

export function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <RoutesComponents />
          <GlobalStyle />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}
