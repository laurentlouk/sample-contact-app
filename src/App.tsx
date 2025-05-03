import { Header } from "./component/Header";
import { Search } from "./component/Search.tsx";
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
          <Search onSearch={() => console.log("hello")} />
          <h1>hello world</h1>
        </Container>
      </>
    </ThemeProviderContext>
  );
}

export default App;
