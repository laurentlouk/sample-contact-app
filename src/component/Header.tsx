import { useContext, type FC } from "react";
import { Nav, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { IconButton } from "./IconButton";
import { ThemeContext } from "../context/theme";

export const Header: FC = () => {
  const { themeName, toggleTheme, theme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <Container $hasFullWidth>
        <Nav>
          <h1>Awesome Contacts</h1>
          <IconButton
            $transparent
            name={themeName === "light" ? "MdLightMode" : "MdDarkMode"}
            size={24}
            color={theme.colors.text}
            aria-label="Toggle theme"
            onClick={toggleTheme}
          />
        </Nav>
      </Container>
    </StyledHeader>
  );
};
