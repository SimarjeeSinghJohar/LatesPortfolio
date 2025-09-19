import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 40px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  flex-direction: row;
  padding: 1rem;
  width: 100%;
  background: url(./images/vecteezy_galaxy-space-abstract-background-with-star-and-comet-shapes_8029888.svg) no-repeat top right;
  background-size: cover;
  position: sticky;
  top: 0;
  z-index: 999.5;    /* stay above other content */
  border-bottom: 1px solid black;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    
  }
`;


export const Span = styled.span`
  font-size : 2.5rem;
  font-weight: 700;
  line-height: 32px;
  color: #c5dadaf2;
  padding: 1rem;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size : 1.5rem;
    line-height: 24px;
    padding: 0.5rem;
  }
  

`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 4;
  }
`;

export const LIST = styled.li`
  width: 100%;

@media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 6;
    width: max-content
  }

`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  color: #FE7E6D;
  flex-direction: row;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 6;
    width: max-content;
    position: relative ;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
]  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 100%;
  position: relative;
  line-height: 32px;
  color: #FE7E6D;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  padding: 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
  padding: 0.3rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`