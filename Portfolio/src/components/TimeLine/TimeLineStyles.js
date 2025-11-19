
import styled, { keyframes, css } from 'styled-components'

// Parallax float animation
const parallaxFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Card entrance animation
const cardEntrance = keyframes`
  0% { opacity: 0; transform: rotateY(90deg) scale(0.5); }
  100% { opacity: 1; transform: rotateY(0deg) scale(1); }
`;

// Glow pulse for active card
const activeGlow = keyframes`
  0%, 100% { box-shadow: 0 8px 25px rgba(0, 230, 255, 0.3); }
  50% { box-shadow: 0 12px 35px rgba(0, 230, 255, 0.5), 0 0 40px rgba(0, 230, 255, 0.3); }
`;

export const CarouselContainer = styled.ul`
  width: 100%;
  max-width: 100%;
  margin: 0 0 40px 0;
  padding: 35px 20px;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  /* horizontal scroll */
  overflow-x: auto;
  overflow-y: visible; /* Changed from hidden to visible to prevent clipping */
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  touch-action: pan-x;
  position: relative;
  z-index: 600;

  /* hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* child items */
  & > li {
    flex: 0 0 auto;
    scroll-snap-align: center;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 30px 18px;
    gap: 25px;
    margin-bottom: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 20px;
    padding: 28px 15px;
    gap: 20px;
  }
`
export const CarouselMobileScrollNode = styled.div`
  background-color: transparent;
  width: auto;
  padding: 0;
  display: flex;
  
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: auto; /* Changed from 120% to auto */
  }
`

export const CarouselItem = styled.div`
  margin: 0;
  width: 320px; /* Increased width for better content display */
  min-width: 320px;
  max-width: 320px;
  height: auto; /* Changed to auto to fit content */
  min-height: 280px; /* Minimum height */
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.25) 0%, rgba(26, 15, 15, 0.35) 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  border-radius: 16px;
  overflow: visible;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid rgba(138, 43, 226, 0.4);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  animation: ${cardEntrance} 0.6s ease-out backwards;
  animation-delay: ${props => props.index * 0.1}s;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 230, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  ${(props) => props.active === props.index ? css`
    opacity: 1; 
    transform: scale(1.05); /* Reduced scale to prevent disappearing */
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.4) 0%, rgba(26, 15, 15, 0.5) 100%);
    border-color: rgba(0, 230, 255, 0.7);
    box-shadow: 0 12px 35px rgba(0, 230, 255, 0.4), 0 0 40px rgba(0, 230, 255, 0.3);
    z-index: 10;

    &:before {
      opacity: 1;
    }
  ` : css`
    opacity: 1; /* Changed to 1 - no fading */
    transform: scale(1);
  `}

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    border-color: rgba(0, 230, 255, 0.5);
    box-shadow: 0 12px 32px rgba(138, 43, 226, 0.5), 0 0 30px rgba(0, 230, 255, 0.2);

    &:before {
      opacity: 0.5;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    height: auto;
    min-height: 260px;
    padding: 18px;
    border-radius: 14px;
  }
  
  @media ${props => props.theme.breakpoints.md} {
    width: 280px;
    min-width: 280px;
    max-width: 280px;
    height: auto;
    min-height: 240px;
    padding: 16px;
    border-radius: 12px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    width: 260px;
    min-width: 260px;
    max-width: 260px;
    height: auto;
    min-height: 220px;
    padding: 14px;
    border-radius: 10px;
    
    ${(props) => props.active === props.index ? css`
      opacity: 1;
      transform: scale(1.03); /* Minimal scale on mobile */
      box-shadow: 0 10px 30px rgba(0, 230, 255, 0.4);
    ` : css`
      opacity: 1; /* Full opacity - no fading */
      transform: scale(1);
    `}
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.08em;
  display: flex;
  flex-shrink: 0; /* Prevent title from shrinking */
  color: #00E6FF;
  margin-bottom: 12px;
  padding-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
  text-transform: uppercase;
  position: relative;
  border-bottom: 2px solid rgba(0, 230, 255, 0.3);

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #00E6FF 0%, transparent 100%);
    transition: width 0.4s ease;
  }

  ${CarouselItem}:hover & {
    color: #FFFFFF;
    border-bottom-color: rgba(0, 230, 255, 0.5);

    &:after {
      width: 60%;
      background: linear-gradient(90deg, #FFFFFF 0%, #00E6FF 50%, transparent 100%);
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;
    padding-bottom: 6px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
    padding-bottom: 6px;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.8);
  padding-right: 8px;
  transition: all 0.3s ease;
  flex: 1;
  overflow-y: visible; /* Show all content */
  overflow-x: hidden;
  
  /* Custom scrollbar styling - Always visible */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(138, 43, 226, 0.3);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 230, 255, 0.6);
    border-radius: 10px;
    
    &:hover {
      background: rgba(0, 230, 255, 0.9);
    }
  }

  ${CarouselItem}:hover & {
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0.03em;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 6px;
    max-height: 150px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 11px;
    line-height: 16px;
    padding-right: 4px;
    max-height: 130px;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`
export const CarouselButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 32px;
  padding: 0 10px;
  flex-wrap: wrap;
  gap: 4px;

  @media ${props => props.theme.breakpoints.md} {
    margin-top: 10px;
    margin-bottom: 24px;
    padding: 0 8px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 8px;
    margin-bottom: 20px;
    padding: 0 5px;
    gap: 3px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: ${(props) => props.active === props.index ? `rgba(0, 230, 255, 0.9)` : `rgba(138, 43, 226, 0.4)`};
  padding: 10px;
  border: 2px solid ${(props) => props.active === props.index ? `#00E6FF` : `rgba(138, 43, 226, 0.6)`};
  border-radius: 50%;
  cursor: pointer;
  margin: 0 8px;
  opacity: ${(props) => props.active === props.index ? `1` : `.7`};
  transform: ${(props) => props.active === props.index ? `scale(1.5)` : `scale(1)`};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${(props) => props.active === props.index ? `0 6px 16px rgba(0, 230, 255, 0.5), 0 0 20px rgba(0, 230, 255, 0.3)` : `none`};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: ${(props) => props.active === props.index ? `radial-gradient(circle, rgba(0, 230, 255, 0.2) 0%, transparent 70%)` : `transparent`};
    ${(props) => props.active === props.index && css`
      animation: ${activeGlow} 2s ease-in-out infinite;
    `}
  }

  &:hover {
    opacity: 1;
    transform: scale(1.3);
    background: rgba(0, 230, 255, 0.7);
    border-color: #00E6FF;
    box-shadow: 0 6px 16px rgba(0, 230, 255, 0.4);
  }

  &:focus {
    outline: none;
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 8px;
    margin: 0 6px;
    transform: ${(props) => props.active === props.index ? `scale(1.3)` : `scale(1)`};
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 6px;
    margin: 0 4px;
    border-width: 1.5px;
    transform: ${(props) => props.active === props.index ? `scale(1.2)` : `scale(0.9)`};
    
    &:before {
      inset: -4px;
    }
    
    &:hover {
      transform: scale(1.1);
    }
  }
`

export const CarouselButtonDot = styled.div`
  background-color: ${(props) => props.active === props.index ? `#0E131F` : `white`};
  border-radius: 50%;
  margin: auto;
  width: 8px;
  height: 8px;
  transition: all 0.3s ease;

  @media ${props => props.theme.breakpoints.md} {
    width: 7px;
    height: 7px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 5px;
    height: 5px;
  }
`



export const AboutSection = styled.section`
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
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0.1) 100%);
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