import styled, { keyframes } from 'styled-components'

// Floating animation for elements
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  50% { transform: translateY(-20px) rotate(-1deg); }
  75% { transform: translateY(-10px) rotate(0.5deg); }
`;

// Glow pulse animation
const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(79, 108, 176, 0.3), 0 0 40px rgba(250, 237, 38, 0.2); }
  50% { box-shadow: 0 0 40px rgba(79, 108, 176, 0.6), 0 0 80px rgba(250, 237, 38, 0.4); }
`;

// Gradient rotation
const gradientRotate = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '40px 24px')};
  margin: 0 auto;
  width: 85%;
  max-width: 1280px;
  box-sizing: border-box;
  position: relative;
  overflow: ${(props) => (props.grid ? 'visible' : 'hidden')};
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(79, 108, 176, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: ${float} 20s ease-in-out infinite;
    opacity: 0.5;
    pointer-events: none;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: ${(props) => (props.nopadding ? '0' : '35px 20px')};
    width: 85%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => (props.nopadding ? '0' : '30px 16px')};
    width: 90%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '25px 12px')};
    width: 95%;
  }
`

// Shimmer animation for titles
const shimmer = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

// Text reveal animation
const textReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

export const SectionTitle = styled.h2`
  font-weight: ${(props) => props.main ? '900' : '800'};
  font-size: ${(props) => props.main ? '56px' : '42px'};
  line-height: ${(props) => props.main ? '68px' : '52px'};
  width: 100%;
  background: linear-gradient(135deg, #FFFFFF 0%, #FAED26 30%, #4F6CB0 60%, #FAED26 90%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% auto;
  animation: ${shimmer} 4s ease-in-out infinite, ${textReveal} 0.8s ease-out;
  margin-bottom: 32px;
  padding: ${(props) => props.main ? '0px 0 24px' : '0'};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: blur(20px);
    opacity: 0.3;
    z-index: -1;
  }

  @media ${props => props.theme.breakpoints.lg}{
    font-size: ${(props) => props.main ? '38px' : '28px'};
    line-height: ${(props) => props.main ? '46px' : '36px'};
    margin-bottom: 20px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '32px' : '26px'};
    line-height: ${(props) => props.main ? '40px' : '34px'};
    margin-bottom: 16px;
    padding: ${(props) => props.main ? '12px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: ${(props) => props.main ? '28px' : '22px'};
    line-height: ${(props) => props.main ? '36px' : '30px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '8px 0 10px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 90%;
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  padding-bottom: 3rem;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 95%;
    font-size: 19px;
    line-height: 30px;
    padding-bottom: 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    font-size: 18px;
    line-height: 28px;
    padding-bottom: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 26px;
    padding-bottom: 1.5rem;
  }
`

// Divider expand animation
const dividerExpand = keyframes`
  0% { width: 0; opacity: 0; }
  100% { width: 100%; opacity: 1; }
`;

// Glow wave animation
const glowWave = keyframes`
  0%, 100% { 
    box-shadow: 0 4px 20px rgba(250, 237, 38, 0.4), 0 0 40px rgba(79, 108, 176, 0.3);
  }
  50% { 
    box-shadow: 0 4px 40px rgba(250, 237, 38, 0.7), 0 0 60px rgba(79, 108, 176, 0.5);
  }
`;

export const SectionDivider = styled.div`
  width: 200px;
  height: 4px;
  border-radius: 10px;
  background: linear-gradient(90deg, #4F6CB0 0%, #FAED26 50%, #4F6CB0 100%);
  background-size: 200% auto;
  margin: ${(props) => props.divider ? "5rem 0" : "0 0 3rem 0"};
  animation: ${dividerExpand} 1s ease-out, ${gradientRotate} 3s ease-in-out infinite, ${glowWave} 2s ease-in-out infinite;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FAED26;
    box-shadow: 0 0 20px rgba(250, 237, 38, 0.8);
    animation: ${glowPulse} 2s ease-in-out infinite;
  }

  &:before {
    left: -12px;
  }

  &:after {
    right: -12px;
    animation-delay: 1s;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100px;
    height: 5px;

    &:after {
      width: 120px;
      height: 7px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 80px;
    height: 4px;

    &:after {
      width: 100px;
      height: 6px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60px;
    height: 3px;

    &:after {
      width: 80px;
      height: 5px;
    }
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  color: #FFF;
  background: linear-gradient(135deg, rgba(79, 108, 176, 0.6) 0%, rgba(79, 108, 176, 0.4) 100%);
  border: 2px solid rgba(79, 108, 176, 0.8);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(79, 108, 176, 0.3);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0E131F;
    background: linear-gradient(135deg, #FAED26 0%, rgba(250, 237, 38, 0.9) 100%);
    border: 2px solid #FAED26;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 25px rgba(250, 237, 38, 0.5);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 4px 15px rgba(250, 237, 38, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.lg}{
    margin-top: 28px; 
    margin-bottom: 70px;
    padding: 14px 28px;
    font-size: 17px;
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 60px;
    padding: 14px 24px;
    width: fit-content;
    font-size: 16px;
    line-height: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 12px 20px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '100px' : '140px'};
  height: ${({ alt }) => alt ? '100px' : '30px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '20px'};
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 35px'};
  color: #fff;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #c46319ff 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .5s ease;
  font-size: ${({ alt }) => alt ? '20px' : '20px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const B = styled.b`
  font-weight: ${(props) => props.sub ? 600 : 800};
  color: #13acc7a9;
  opacity: 1;
  animation: ${slideIn} 0.6s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
`



const pulse = keyframes`
  0% { transform: scale(1); color: #b1631aff; }
  30% { transform: scale(1.1); color: #1ab1b1; }
  100% { transform: scale(1); color: #b11a1a; }
`;

export const AnimatedKeyword = styled.span`
  display: inline-block;
  animation: ${pulse} 1.2s infinite;
  animation-delay: ${({ delay }) => delay || '0s'}, 0s;
  opacity: 0;
  font-weight: bold;
  transition: color 0.5s;
  ${props => props.sub && `
    animation-duration: 1.2s, 4s;
    color: #1ab1b1;
  `}
`
  