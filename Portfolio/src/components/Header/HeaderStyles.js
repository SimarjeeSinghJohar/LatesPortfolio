import { IoIosArrowDropdown } from 'react-icons/io';
import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
 display: grid;
  grid-template-columns:  1fr 4fr 1fr ; 
  grid-template-rows: auto auto auto; /* top row + Div2 row */
  align-items: center;
  padding: 1rem 2rem;

  width: 100%;
  position: fixed;
  top:0;
  z-index: 2;  
  margin-top: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
  padding: 0.5rem 0.5rem; /* adjust padding on small screens */
  display: grid;
  background:black;
  grid-template-columns:  0fr ;
  align-items: center;
  width: 100%;
  position: sticky;
  top:0;
  margin-top: 0rem;
  }
  
  
`;

export const CoinContainer = styled.div`
  width: 8rem;
  height: 8rem;
  perspective: 1000px;
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
`;

export const CoinInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4,2,0.2,1);
  transform-style: preserve-3d;
  border-radius: 50%;
  transform: ${({ flipped }) => flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const CoinFace = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border: 2px solid white;
  transition: transform 0.4s cubic-bezier(0.4,2,0.2,1), box-shadow 0.3s;

  ${({ flipped }) => !flipped && `
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 24px 8px #24d3cdd4;
      cursor: pointer;
    }

    &:hover::after {
      content: "Click to flip!";
      position: absolute;
      bottom: -2.2rem;
      left: 50%;
      transform: translateX(-50%);
      background: #212d45;
      color: #fff;
      padding: 0.3rem 0.8rem;
      border-radius: 8px;
      font-size: 1rem;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(33,45,69,0.18);
      pointer-events: none;
    }
  `}

`;

export const CoinBack = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #24d3cd 60%, #212d45 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`; 

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: -1; /* stays behind everything */
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1
  }
`; 

export const Div1 = styled.div`
grid-column:1;
grid-row: 1;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  & > * {
    flex-shrink: 0;
  }
  background: url('/images/vecteezy_galaxy-space-abstract-background-with-star-and-comet-shapes_8029888.svg');
  background-size: cover;
  width: 100%;
  height: 35%;
  border: 1px solid white;
  padding: .5rem;
  
  svg {
  top: 30px;
  right: 30px;
    width: 50%;
    height: 50%;
    object-fit: contain;
    z-index: -1;
    position: fixed;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.5rem; /* slightly smaller spacing on mobile */
    grid-column: 2;
    grid-row: 1;

  }
    
`;

export const Div4 = styled.div`
grid-column: 1;
  grid-row: 1;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  & > * {
    flex-shrink: 0;
  }
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid white;

  

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.5rem; /* slightly smaller spacing on mobile */
    grid-column: 2;


  }
`;

export const Div5 = styled.div`
grid-column: 3;
  grid-row: 2;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  & > * {
    flex-shrink: 0;
  }
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid white;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.5rem; /* slightly smaller spacing on mobile */
    margin-top: 2rem;
  }
`;

export const LIST = styled.li`
width: 100%;

@media ${(props) => props.theme.breakpoints.sm} {
padding-top: 1rem;
}

`;

export const Div2 = styled.div`
  grid-column: 1; /* full width */
  grid-row: 2;
  display: grid;
  justify-content: space-around; 
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: 1px solid white;
  padding: 1rem;
  margin-top: 2rem;
  gap: 1rem;
  width: 100%;
  
  
  & > * {
    flex: 1;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 1rem;
    grid-column: 2;
    display: flex;
    gap: 0.5rem;
  }
`;

export const Div3 = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  align-self: start;




  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.5rem; /* slightly smaller spacing on mobile */
    display: grid;

  }
`;

// Navigation Links
export const NavLink = styled.a`
font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textLight || "#fff"};
  text-decoration: none;
  position: relative;
  padding: 0.8rem 1.2rem;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary || "#24d3cd"};
    transform: translateY(-2px);
    cursor: pointer;
    outline: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0.4rem;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary || "#24d3cd"};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding: .5rem .8rem;
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

export const P = styled.p`
  display: block;
  font-size: 1.5rem;
  color: #fff;
  padding: 0.75rem 1rem;
  margin: 0.2rem 0;
  transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1), background 0.3s;
  &:hover {
    transform: scale(1.08) translateY(-2px);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
    padding: 0.5rem;
  }
`