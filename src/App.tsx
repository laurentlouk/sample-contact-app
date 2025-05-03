import { Header } from "./component/Header";
import { Container } from "./component/styles/Container.styled.tsx";
import { GlobalStyles } from "./component/styles/Global.tsx";
import { ThemeProviderContext } from "./context/theme.tsx";

function App() {
  return (
    <ThemeProviderContext>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>hello world</h1>
        </Container>
      </>
    </ThemeProviderContext>
  );
}

export default App;
