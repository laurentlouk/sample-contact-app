import styled from "styled-components";

type ContainerProps = {
  fullWidth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "1200px")};
  margin: 0 auto;
`;
