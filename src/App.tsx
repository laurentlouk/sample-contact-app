import { Header } from "./component/Header";
import { Container } from "./component/styles/Container.styled.tsx";
import { Flex } from "./component/styles/Flex.styled.tsx";
import { GlobalStyles } from "./component/styles/Global.tsx";
import { ThemeProviderContext } from "./context/theme.tsx";
import { UserSearchGrid } from "./component/UserSearchGrid";

function App() {
  return (
    <ThemeProviderContext>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Flex $gap="20px" $wrap="wrap">
            <UserSearchGrid />
          </Flex>
        </Container>
      </>
    </ThemeProviderContext>
  );
}

export default App;
