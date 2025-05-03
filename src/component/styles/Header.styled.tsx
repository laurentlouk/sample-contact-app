import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 4px 20px;
  margin: 20px 20px;
  border-radius: 18px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #333;
    font-size: 18px;
  }
`;
