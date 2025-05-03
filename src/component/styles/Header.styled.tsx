import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 0px 20px;
  margin: 20px 20px;
  border-radius: 18px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: ${({ theme }) => theme.colors.text}a1;
    font-size: 18px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
