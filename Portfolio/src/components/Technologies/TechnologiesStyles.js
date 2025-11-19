
import styled, { keyframes } from 'styled-components'

// Orbiting animation
const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
`;

// Pulse glow animation
const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 230, 255, 0.4), inset 0 0 20px rgba(138, 43, 226, 0.2); }
  50% { box-shadow: 0 0 40px rgba(0, 230, 255, 0.8), inset 0 0 30px rgba(138, 43, 226, 0.4); }
`;

// Float animation
const techFloat = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.05); }
`;

export const ImageContainer = styled.div`
  text-align: center;
  background: radial-gradient(ellipse at center, rgba(138, 43, 226, 0.2) 0%, transparent 70%);
  width: 100%;
  padding: 30px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:before, &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 230, 255, 0.6), transparent);
    animation: ${orbit} 10s linear infinite;
  }

  &:before {
    top: 50%;
    left: 50%;
    margin: -10px 0 0 -10px;
  }

  &:after {
    top: 50%;
    left: 50%;
    margin: -10px 0 0 -10px;
    animation-duration: 15s;
    animation-direction: reverse;
    background: radial-gradient(circle, rgba(138, 43, 226, 0.6), transparent);
  }

  @media ${props => props.theme.breakpoints.lg} {
    background-image: radial-gradient(50% 50% at 50% 50%, rgba(138, 43, 226, 0.15) 53.8%, rgba(138, 43, 226, 0) 100%);
    padding: 40px;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 20px;
    margin-top: 24px;
  }
  @media ${props => props.theme.breakpoints.sm} {
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 2rem 0;
  transition: all 0.3s ease;
  
  @media ${props => props.theme.breakpoints.lg}{
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin: 1.8rem 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 1.5rem 0;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 1.2rem 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #00E6FF;
  margin-bottom: 12px;
  margin-top: 8px;
  text-align: center;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 12px;
    text-align: left;
  }
`

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-align: center;

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 15px;
    line-height: 24px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 14px;
    line-height: 22px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 13px;
    line-height: 20px;
    margin-left: 12px;
    text-align: left;
  }
`

export const ListItem = styled.li`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(26, 15, 15, 0.3) 100%);
  padding: 32px 24px;
  border-radius: 20px;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  animation: ${techFloat} 4s ease-in-out infinite;
  animation-delay: ${props => (Math.random() * 2)}s;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(0, 230, 255, 0.6), rgba(138, 43, 226, 0.6));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 230, 255, 0.3), transparent);
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.05) rotateZ(2deg);
    box-shadow: 0 20px 60px rgba(138, 43, 226, 0.5), 0 0 40px rgba(0, 230, 255, 0.3);
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.35) 0%, rgba(26, 15, 15, 0.4) 100%);
    animation: ${pulseGlow} 2s ease-in-out infinite;

    &:before {
      opacity: 1;
    }

    &:after {
      width: 300px;
      height: 300px;
    }

    ${ListTitle} {
      transform: scale(1.05);
      color: #FFFFFF;
    }

    ${ListParagraph} {
      color: rgba(255, 255, 255, 1);
    }
  }

  @media ${props => props.theme.breakpoints.lg}{
    max-width: 100%;
    padding: 20px;
    border-radius: 14px;
  }

  @media ${props => props.theme.breakpoints.md}{
    max-width: 100%;
    padding: 18px;
    border-radius: 12px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0;
    max-width: 100%;
    flex-direction: row;
    padding: 16px;
    align-items: center;
    border-radius: 10px;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));

  ${ListItem}:hover & {
    transform: scale(1.2) rotateY(360deg);
    filter: drop-shadow(0 12px 24px rgba(0, 230, 255, 0.6));
  }
  
  @media ${props => props.theme.breakpoints.lg}{
    width: 56px;
    height: 56px;
  }
  
  @media ${props => props.theme.breakpoints.md}{
    width: 48px;
    height: 48px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 40px;
    height: 40px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`

export const TechSection = styled.section`
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

// Skills Progress Bars - New Components
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fillProgress = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const countUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin: 40px 0 50px;
  width: 100%;

  @media ${props => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 26px;
    margin: 35px 0 45px;
  }

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
    margin: 30px 0 40px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 18px;
    margin: 25px 0 35px;
  }
`;

export const SkillCard = styled.div`
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(26, 15, 15, 0.25) 100%);
  padding: 24px;
  border-radius: 16px;
  border: 2px solid rgba(138, 43, 226, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out backwards;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00E6FF, #8A2BE2);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 230, 255, 0.5);
    box-shadow: 0 12px 40px rgba(138, 43, 226, 0.4), 0 0 30px rgba(0, 230, 255, 0.2);
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.25) 0%, rgba(26, 15, 15, 0.35) 100%);

    &:before {
      transform: scaleX(1);
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 20px;
    border-radius: 14px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 18px;
    border-radius: 12px;
  }
`;

export const SkillName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  ${SkillCard}:hover & {
    color: #00E6FF;
    transform: translateX(5px);
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 17px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const SkillLevel = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  animation: ${props => props.animate ? countUp : 'none'} 0.5s ease;
  
  ${props => {
    switch(props.level) {
      case 'Expert':
        return `
          background: linear-gradient(135deg, rgba(0, 230, 255, 0.2), rgba(0, 230, 255, 0.1));
          color: #00E6FF;
          border: 1px solid rgba(0, 230, 255, 0.4);
          box-shadow: 0 0 10px rgba(0, 230, 255, 0.3);
        `;
      case 'Advanced':
        return `
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(138, 43, 226, 0.1));
          color: #8A2BE2;
          border: 1px solid rgba(138, 43, 226, 0.4);
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
        `;
      default:
        return `
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.3);
        `;
    }
  }}

  ${SkillCard}:hover & {
    transform: scale(1.05);
    ${props => {
      switch(props.level) {
        case 'Expert':
          return `box-shadow: 0 0 20px rgba(0, 230, 255, 0.6);`;
        case 'Advanced':
          return `box-shadow: 0 0 20px rgba(138, 43, 226, 0.6);`;
        default:
          return `box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);`;
      }
    }}
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 11px;
    padding: 3px 10px;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    gap: 12px;
  }
`;

export const ProgressBar = styled.div`
  flex: 1;
  width: 100%;
  height: 14px;
  background: rgba(138, 43, 226, 0.2);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(138, 43, 226, 0.3);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.15) 50%, 
      transparent 100%
    );
    animation: shimmer 2.5s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 12px;
  }
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.animate ? `${props.percentage}%` : '0%'};
  background: linear-gradient(90deg, #8A2BE2 0%, #00E6FF 50%, #8A2BE2 100%);
  background-size: 200% 100%;
  border-radius: 12px;
  transition: width 1.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 0 15px rgba(0, 230, 255, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.3);
  animation: gradientShift 3s ease infinite;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
    border-radius: 0 12px 12px 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: #FFFFFF;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
    50% { opacity: 0.6; transform: translateY(-50%) scale(1.3); }
  }
`;
