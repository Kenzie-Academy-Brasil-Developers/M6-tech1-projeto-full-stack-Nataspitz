import styled, { keyframes } from "styled-components";


const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const StyleDownAnimation = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    animation: ${slideDown} 0.5s ease-in-out;
`