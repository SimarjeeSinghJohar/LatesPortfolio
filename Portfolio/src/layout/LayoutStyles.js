import styled from 'styled-components';
import { Layout } from './Layout';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;

  main {
    padding-top: 120px;
    
    @media ${(props) => props.theme.breakpoints.lg} {
      padding-top: 110px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      padding-top: 100px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      padding-top: 180px;
    }
  }
`
