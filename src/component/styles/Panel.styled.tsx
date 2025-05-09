import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Panel = styled.div`
  min-height: 100px;
  margin: 16px;
  padding: 16px;

  justify-content: center;
  align-items: center;
  text-align: center;

  transition: background-color 0.3s ease;
  animation: ${fadeIn} 0.3s ease-in;
`;
