import styled, { keyframes } from 'styled-components'

// Timeline slide-in animation
const slideInTimeline = keyframes`
  0% { opacity: 0; transform: translateX(-40px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Progress bar fill animation
const progressFill = keyframes`
  0% { width: 0; opacity: 0; }
  100% { width: 100%; opacity: 1; }
`;

// Pulse glow for timeline dots
const dotPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(250, 237, 38, 0.7); }
  50% { box-shadow: 0 0 0 8px rgba(250, 237, 38, 0); }
`;

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 40px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 3rem 0;
  transition: all 0.3s ease;
  
  @media ${props => props.theme.breakpoints.lg}{
    gap: 28px;
    margin: 2.5rem 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    gap: 24px;
    margin: 2rem 0;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    gap: 20px;
    margin: 1.5rem 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ListParagraph = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 4px;

  ul {
    margin: 12px 0 0 0;
    padding-left: 0;
    list-style: none;
  }

  li {
    margin-bottom: 12px;
    padding-left: 24px;
    position: relative;
    transition: all 0.2s ease;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #00E6FF;
      font-size: 20px;
      line-height: 28px;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
      transform: translateX(4px);
    }
  }

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 15px;
    line-height: 26px;

    li {
      padding-left: 22px;
      margin-bottom: 11px;

      &:before {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 14px;
    line-height: 24px;
    
    ul {
      margin: 10px 0 0 0;
    }

    li {
      padding-left: 20px;
      margin-bottom: 10px;

      &:before {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 13px;
    line-height: 22px;
    
    ul {
      margin: 8px 0 0 0;
    }
    
    li {
      padding-left: 18px;
      margin-bottom: 8px;

      &:before {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 36px;
  background: linear-gradient(135deg, rgba(79, 108, 176, 0.2) 0%, rgba(26, 15, 15, 0.3) 100%);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid rgba(79, 108, 176, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  animation: ${slideInTimeline} 0.6s ease-out backwards;
  animation-delay: ${props => props.delay || '0s'};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 0;
    background: linear-gradient(180deg, #00E6FF 0%, rgba(79, 108, 176, 0.6) 100%);
    transition: all 0.6s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: -12px;
    width: 20px;
    height: 20px;
    background: #00E6FF;
    border-radius: 50%;
    border: 4px solid rgba(26, 15, 15, 0.9);
    box-shadow: 0 0 0 2px rgba(79, 108, 176, 0.4);
    z-index: 10;
  }

  &:hover {
    transform: translateX(12px) scale(1.02);
    box-shadow: 0 16px 48px rgba(79, 108, 176, 0.4), 0 0 32px rgba(250, 237, 38, 0.2);
    background: linear-gradient(135deg, rgba(79, 108, 176, 0.3) 0%, rgba(26, 15, 15, 0.4) 100%);
    border-color: rgba(250, 237, 38, 0.5);
    
    &:before {
      height: 100%;
      width: 8px;
      animation: ${progressFill} 0.8s ease-out;
    }

    &:after {
      animation: ${dotPulse} 1.5s ease-in-out infinite;
      background: #FFFFFF;
      box-shadow: 0 0 20px rgba(250, 237, 38, 0.8);
    }
  }

  @media ${props => props.theme.breakpoints.lg}{
    padding: 30px;
    border-radius: 16px;

    &:after {
      width: 18px;
      height: 18px;
      top: 18px;
      left: -11px;
    }
  }

  @media ${props => props.theme.breakpoints.md}{
    padding: 26px;
    border-radius: 14px;

    &:after {
      width: 16px;
      height: 16px;
      top: 16px;
      left: -10px;
    }
  }

  @media ${props => props.theme.breakpoints.sm}{
    padding: 22px;
    border-radius: 12px;

    &:after {
      width: 14px;
      height: 14px;
      top: 14px;
      left: -9px;
    }
  }
`

export const JobDate = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #00E6FF;
  margin-bottom: 16px;
  padding: 10px 18px;
  background: linear-gradient(135deg, rgba(250, 237, 38, 0.15) 0%, rgba(79, 108, 176, 0.1) 100%);
  border-radius: 12px;
  display: inline-block;
  width: fit-content;
  border: 1px solid rgba(250, 237, 38, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(250, 237, 38, 0.2), transparent);
    transition: left 0.5s ease;
  }

  ${ListItem}:hover & {
    border-color: rgba(250, 237, 38, 0.6);
    background: linear-gradient(135deg, rgba(250, 237, 38, 0.25) 0%, rgba(79, 108, 176, 0.15) 100%);
    
    &:before {
      left: 100%;
    }
  }

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 13px;
    padding: 9px 16px;
    margin-bottom: 14px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 12px;
    padding: 8px 14px;
    margin-bottom: 12px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 11px;
    padding: 7px 12px;
    margin-bottom: 10px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #FFFFFF 0%, rgba(250, 237, 38, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${ListItem}:hover & {
    transform: translateX(4px);
    text-shadow: 0 4px 8px rgba(250, 237, 38, 0.3);
  }

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 24px;
    line-height: 32px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 22px;
    line-height: 30px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 26px;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

export const ExpSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;
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
    padding: 50px 35px;
    width: 92%;
    border-radius: 18px;

    &:before {
      border-radius: 18px;
    }
  }

  @media ${props => props.theme.breakpoints.md}{
    padding: 40px 30px;
    width: 94%;
    border-radius: 16px;

    &:before {
      border-radius: 16px;
    }
  }

  @media ${props => props.theme.breakpoints.sm}{
    padding: 30px 20px;
    width: 95%;
    border-radius: 12px;

    &:before {
      border-radius: 12px;
    }
  }
`;
