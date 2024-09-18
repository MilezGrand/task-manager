import GlobalStyle from "./styles/global";
import { AppRouter } from "./router";
import { MainProviders } from "./providers";

function App() {
  return (
    <MainProviders>
      <GlobalStyle />
      <AppRouter />
    </MainProviders>
  );
}

export default App;
