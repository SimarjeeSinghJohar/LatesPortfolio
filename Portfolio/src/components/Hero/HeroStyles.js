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
  font-size: clamp(42px, 8vw, 72px);
  font-weight: 900;
  line-height: 1.2;
  color: #fff;
  background: linear-gradient(135deg, #FFFFFF 0%, #00E6FF 25%, #8A2BE2 50%, #FF1493 75%, #FFFFFF 100%);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 5s ease infinite, ${textFloat} 3s ease-in-out infinite;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  
  &:hover {
    animation: ${gradientShift} 5s ease infinite, ${glitch} 0.5s ease-in-out;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: clamp(36px, 7vw, 56px);
    margin-bottom: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: clamp(28px, 6vw, 42px);
    margin-bottom: 16px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(18px, 3vw, 28px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
  animation: ${textFloat} 4s ease-in-out infinite;
  animation-delay: 0.2s;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  strong {
    background: linear-gradient(90deg, #00E6FF 0%, #8A2BE2 50%, #00E6FF 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 3s linear infinite;
    font-weight: 700;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: clamp(16px, 2.5vw, 24px);
    margin-bottom: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: clamp(14px, 2vw, 20px);
    margin-bottom: 24px;
  }
`;

export const HeroButton = styled.button`
  padding: 18px 48px;
  font-size: 18px;
  font-weight: 700;
  color: #0E131F;
  background: linear-gradient(135deg, #00E6FF 0%, #00BFFF 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 230, 255, 0.4);
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
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 12px 48px rgba(0, 230, 255, 0.6), 0 0 40px rgba(138, 43, 226, 0.3);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px 40px;
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 14px 32px;
    font-size: 14px;
    width: 100%;
  }
`;





