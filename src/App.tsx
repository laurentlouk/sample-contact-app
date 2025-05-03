import { ThemeProvider } from "styled-components";
import { Header } from "./component/Header";
import { Container } from "./component/styles/Container.styled.tsx";
import { lightTheme } from "./theme";
import { GlobalStyles } from "./component/styles/Global.tsx";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>hello world</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
