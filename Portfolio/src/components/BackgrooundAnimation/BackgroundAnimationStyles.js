import styled from 'styled-components';

export const DIV = styled.div`
  width: 40%;
  height: 40%;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: -10;
  background-color: #0606060b;
  pointer-events: none;
  transition: all 0.3s ease;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 35%;
    height: 35%;
    top: 30px;
    right: 30px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    height: 50%;
    top: 20px;
    right: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    height: 50%;
    top: 10px;
    right: 10px;
  }
`;

