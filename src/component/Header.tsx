import type { FC } from "react";
import { StyledHeader } from "./styles/Header.styled";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <h1>Contacts</h1>
    </StyledHeader>
  );
};
