import styled from "styled-components";

export type StyledButtonProps = {
  $transparent?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  background: ${({ theme, $transparent }) =>
    $transparent ? "transparent" : theme.colors.primary};
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
