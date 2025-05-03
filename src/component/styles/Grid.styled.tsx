import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  justify-items: center;
  align-items: center;

  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 901px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1201px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
