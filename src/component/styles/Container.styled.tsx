import styled from "styled-components";

type ContainerProps = {
  $hasFullWidth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  max-width: ${({ $hasFullWidth }) => ($hasFullWidth ? "100%" : "1200px")};
  margin: 0 auto;
`;
