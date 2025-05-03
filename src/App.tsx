import { Header } from "./component/Header";
import { Search } from "./component/Search.tsx";
import { Container } from "./component/styles/Container.styled.tsx";
import { GlobalStyles } from "./component/styles/Global.tsx";
import { UserCard } from "./component/UserCard.tsx";
import { ThemeProviderContext } from "./context/theme.tsx";

function App() {
  return (
    <ThemeProviderContext>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Search onSearch={() => console.log("hello")} />
          <UserCard
            user={{
              id: 1,
              name: "John Doe",
              username: "johndoe",
            }}
          />
          <UserCard
            isLoading
            user={{
              id: 1,
              name: "John Doe",
              username: "johndoe",
            }}
          />
        </Container>
      </>
    </ThemeProviderContext>
  );
}

export default App;
