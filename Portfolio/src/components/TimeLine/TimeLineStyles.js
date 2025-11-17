
import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  width: 100%; /* make full width for consistency */
  max-width: 100vw; /* prevent overflow on large screens */
  margin: 0 0 80px 0;
  padding: 0;
  list-style: none;

  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 25px;

  /* horizontal scroll */
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  touch-action: pan-x;
  position: relative;
  z-index: 600;

  /* hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* child items */
  & > li {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.div`

    background-color: #210c0c05;
    width: 120px;
    padding: 2px;
  

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}

  }
`

export const CarouselItem = styled.div`
 margin-left: ;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    height: fit-content;
    background-color: transparent;

    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
    background-color: transparent;

  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    background-color: transparent;

    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
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
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`
export const CarouselButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 48px;
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 8px;
  border: none;
  cursor: pointer;
  margin: 0 6px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 50%;
  margin: auto;
  width: 8px;
  height: 8px;
  transition: all 0.3s ease;
`



export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  background: rgba(26, 15, 15, 0.1);
  position: relative;
  z-index: 600;
  isolation: isolate;
`;