import styled from "styled-components";

export type StyledButtonProps = {
  $variant?: "primary" | "ghost";
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  background: ${({ theme, $variant }) =>
    $variant === "ghost" ? "transparent" : theme.colors.buttonPrimary};
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    opacity: ${({ $variant }) => ($variant === "ghost" ? 1 : 0.8)};
    box-shadow: ${({ theme, $variant }) =>
      $variant === "ghost"
        ? theme.colors.body === "#121212"
          ? "0 2px 4px rgba(255, 255, 255, 0.2)"
          : "0 2px 4px rgba(0, 0, 0, 0.1)"
        : "none"};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.buttonPrimary};
    outline-offset: 2px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
