import styled from "styled-components";

const ListItemContainer = styled.div`
  display: flex;
  grid-column: 2 / span 10;
  flex-direction: column;
  padding: 1rem;
  gap: 0.4rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 #186a3b55;
  backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Quote = styled.h2`
  font-family: "Kalam";
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  &::before {
    content: "“";
    margin-right: 0.5rem;
    font-size: 3rem;
    font-weight: 600;
  }
  &::after {
    content: "”";
    margin-left: 0.5rem;
    font-size: 3rem;
    font-weight: 600;
  }
`;

export const Author = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  align-self: flex-end;
  &::before {
    content: "~";
    margin-right: 0.5rem;
  }
`;

export default ListItemContainer;
