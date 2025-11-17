import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
`;


