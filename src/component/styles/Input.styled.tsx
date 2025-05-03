import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.searchbarBackground};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
