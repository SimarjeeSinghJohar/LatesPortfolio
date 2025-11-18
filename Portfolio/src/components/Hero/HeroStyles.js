import styled, { keyframes } from 'styled-components';

// 3D Text float animation
const textFloat = keyframes`
  0%, 100% { transform: translateY(0) rotateX(0deg); }
  50% { transform: translateY(-15px) rotateX(5deg); }
`;

// Glitch effect
const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

// Particle float
const particleFloat = keyframes`
  0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
  25% { transform: translateY(-20px) translateX(10px) scale(1.1); opacity: 1; }
  50% { transform: translateY(-40px) translateX(-10px) scale(0.9); opacity: 0.7; }
  75% { transform: translateY(-20px) translateX(5px) scale(1.05); opacity: 0.9; }
`;

// Gradient animation
const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  perspective: 1000px;
  
  &:before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%);
    animation: ${particleFloat} 6s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0, 230, 255, 0.1) 0%, transparent 70%);
    animation: ${particleFloat} 8s ease-in-out infinite reverse;
    pointer-events: none;
    z-index: 0;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    
    &:before, &:after {
      width: 300px;
      height: 300px;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 900;
  line-height: 1.2;
  color: #fff;
  background: linear-gradient(135deg, #FFFFFF 0%, #00E6FF 20%, #FFFFFF 40%, #8A2BE2 60%, #FFFFFF 80%, #00E6FF 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 6s ease infinite;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;
  filter: drop-shadow(0 0 25px rgba(0, 230, 255, 0.4)) drop-shadow(0 0 45px rgba(138, 43, 226, 0.25));
  transition: all 0.4s ease;
  
  &:hover {
    filter: drop-shadow(0 0 35px rgba(0, 230, 255, 0.6)) drop-shadow(0 0 60px rgba(138, 43, 226, 0.4));
    transform: translateY(-2px);
    animation: ${gradientShift} 3s ease infinite;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: clamp(24px, 4.5vw, 40px);
    margin-bottom: 14px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: clamp(20px, 4vw, 32px);
    margin-bottom: 12px;
    letter-spacing: -0.3px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(15px, 2.2vw, 20px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
  font-weight: 400;
  letter-spacing: 0.3px;
  max-width: 850px;

  strong {
    background: linear-gradient(90deg, #00E6FF 0%, #FFFFFF 50%, #8A2BE2 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 4s linear infinite;
    font-weight: 700;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: clamp(14px, 2vw, 18px);
    margin-bottom: 20px;
    max-width: 700px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: clamp(13px, 1.8vw, 16px);
    margin-bottom: 18px;
    max-width: 100%;
  }
`;

export const HeroButton = styled.button`
  padding: 15px 42px;
  font-size: 15px;
  font-weight: 700;
  color: #0E131F;
  background: linear-gradient(135deg, #00E6FF 0%, #00BFFF 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 6px 28px rgba(0, 230, 255, 0.35);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 10px 42px rgba(0, 230, 255, 0.55), 0 0 35px rgba(138, 43, 226, 0.3);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 14px 36px;
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 13px 30px;
    font-size: 13px;
    width: 100%;
  }
`;





