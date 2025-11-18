import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 2rem;
  place-items: center;
  column-gap: 1.5rem;
  row-gap: 2rem;
  transition: all 0.3s ease;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 1.8rem;
    column-gap: 1.5rem;
    row-gap: 1.8rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 1.5rem;
    column-gap: 1.2rem;
    row-gap: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1.2rem 1rem;
    padding-bottom: 0;
  }
`
export const BlogCard = styled.div`
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-align: center;
  background: linear-gradient(135deg, rgba(45, 65, 89, 0.95) 0%, rgba(26, 15, 15, 0.85) 100%);
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid rgba(138, 43, 226, 0.4);
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #00E6FF 0%, #8A2BE2 50%, #00E6FF 100%);
    background-size: 200% auto;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    animation: shimmer 3s linear infinite;
    z-index: 10;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(0, 230, 255, 0.3), rgba(138, 43, 226, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-16px) rotateX(2deg) scale(1.03);
    box-shadow: 0 20px 60px rgba(138, 43, 226, 0.6), 0 0 80px rgba(0, 230, 255, 0.2);
    border-color: rgba(0, 230, 255, 0.8);

    &:before {
      transform: scaleX(1);
    }

    &:after {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 16px;
    border-radius: 14px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 12px;
    border-radius: 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: brightness(0.85) saturate(0.9);
  position: relative;

  ${BlogCard}:hover & {
    transform: scale(1.15) rotateZ(1deg);
    filter: brightness(1.1) saturate(1.1) contrast(1.1);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 280px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 250px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 220px;
  }
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #FFFFFF;
  padding: 1rem 0 0.5rem 0;
  font-size: ${(props) => props.$isTitle ? '3rem' : '2rem'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  ${BlogCard}:hover & {
    color: #00E6FF;
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.$isTitle ? '2.8rem' : '1.9rem'};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.$isTitle ? '2.5rem' : '1.8rem'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.$isTitle ? '2.2rem' : '1.6rem'};
  }
`;

export const Hr = styled.hr`
  width: 60px;
  height: 4px;
  margin: 16px auto;
  border: 0;
  background: linear-gradient(90deg, #00E6FF 0%, rgba(0, 230, 255, 0.6) 100%);
  border-radius: 2px;
  transition: all 0.3s ease;

  ${BlogCard}:hover & {
    width: 80px;
    background: linear-gradient(90deg, #00E6FF 0%, #00E6FF 100%);
  }
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 32px 20px 32px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  transition: all 0.3s ease;

  ${BlogCard}:hover & {
    color: rgba(255, 255, 255, 1);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 28px 18px 28px;
    font-size: 15px;
    line-height: 24px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 24px 16px 24px;
    font-size: 14px;
    line-height: 22px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 20px 14px 20px;
    font-size: 13px;
    line-height: 20px;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 12px 24px;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.8) 0%, rgba(138, 43, 226, 0.6) 100%);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid rgba(138, 43, 226, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: linear-gradient(135deg, #00E6FF 0%, rgba(0, 230, 255, 0.9) 100%);
    color: #0E131F;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 230, 255, 0.4);
    border-color: #00E6FF;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.4rem;
    padding: 11px 22px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.3rem;
    padding: 10px 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 9px 18px;
  }
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  padding: 6px 14px;
  background: rgba(138, 43, 226, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(138, 43, 226, 0.3);
  transition: all 0.3s ease;

  ${BlogCard}:hover & {
    background: rgba(138, 43, 226, 0.4);
    color: #00E6FF;
    border-color: rgba(0, 230, 255, 0.5);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.3rem;
    padding: 5px 12px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.2rem;
    padding: 4px 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    padding: 3px 8px;
  }
`

export const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  background: rgba(26, 15, 15, 0.2);
  position: relative;
  z-index: 600;
  isolation: isolate;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(79, 108, 176, 0.4) 0%, rgba(79, 108, 176, 0.1) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media ${props => props.theme.breakpoints.lg}{
    padding: 28px 30px;
    width: 92%;
    border-radius: 18px;

    &:before {
      border-radius: 18px;
    }
  }

  @media ${props => props.theme.breakpoints.md}{
    padding: 26px 28px;
    width: 94%;
    border-radius: 16px;

    &:before {
      border-radius: 16px;
    }
  }

  @media ${props => props.theme.breakpoints.sm}{
    padding: 24px 20px;
    width: 95%;
    border-radius: 12px;

    &:before {
      border-radius: 12px;
    }
  }
`;

// Filter and Search Controls
export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px 0 60px;
  width: 100%;
  max-width: 1200px;

  @media ${props => props.theme.breakpoints.md} {
    gap: 20px;
    margin: 32px 0 48px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    gap: 16px;
    margin: 24px 0 36px;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  input {
    width: 100%;
    padding: 16px 20px 16px 50px;
    border-radius: 50px;
    border: 2px solid rgba(138, 43, 226, 0.4);
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(26, 15, 15, 0.2) 100%);
    color: #FFFFFF;
    font-size: 16px;
    font-family: inherit;
    transition: all 0.3s ease;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &:focus {
      border-color: rgba(0, 230, 255, 0.6);
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.25) 0%, rgba(26, 15, 15, 0.3) 100%);
      box-shadow: 0 4px 20px rgba(0, 230, 255, 0.3);
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 100%;
    
    input {
      padding: 14px 18px 14px 46px;
      font-size: 15px;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    input {
      padding: 12px 16px 12px 42px;
      font-size: 14px;
    }
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  opacity: 0.7;
  pointer-events: none;

  @media ${props => props.theme.breakpoints.sm} {
    left: 14px;
    font-size: 18px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    gap: 10px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    gap: 8px;
  }
`;

export const FilterButton = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  border: 2px solid ${props => props.active ? '#00E6FF' : 'rgba(138, 43, 226, 0.4)'};
  background: ${props => props.active 
    ? 'linear-gradient(135deg, rgba(0, 230, 255, 0.3) 0%, rgba(138, 43, 226, 0.2) 100%)'
    : 'linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(26, 15, 15, 0.2) 100%)'
  };
  color: ${props => props.active ? '#00E6FF' : 'rgba(255, 255, 255, 0.8)'};
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 230, 255, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
    border-color: ${props => props.active ? '#00E6FF' : 'rgba(0, 230, 255, 0.5)'};
    box-shadow: 0 6px 20px rgba(0, 230, 255, 0.3);
    
    &:before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 230, 255, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 10px 20px;
    font-size: 13px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.sm} {
    gap: 8px;
  }
`;

export const SortButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid ${props => props.active ? 'rgba(138, 43, 226, 0.6)' : 'rgba(138, 43, 226, 0.3)'};
  background: ${props => props.active 
    ? 'linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, rgba(26, 15, 15, 0.3) 100%)'
    : 'rgba(138, 43, 226, 0.1)'
  };
  color: ${props => props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 13px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(79, 108, 176, 0.6);
    background: linear-gradient(135deg, rgba(79, 108, 176, 0.25) 0%, rgba(26, 15, 15, 0.25) 100%);
    color: #FFFFFF;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 108, 176, 0.4);
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 9px 18px;
    font-size: 12px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 8px 14px;
    font-size: 11px;
  }
`;