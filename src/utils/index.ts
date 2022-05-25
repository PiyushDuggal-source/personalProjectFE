import styled from "styled-components";

export const Box = styled.div``;
export const Img = styled.img``;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Grid = styled.div`
  display: grid;
  grid-gap: ${(props: { gap: string }) => props.gap || "1rem"};
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
