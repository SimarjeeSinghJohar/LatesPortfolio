import styled, { keyframes } from "styled-components"

// Count up animation
const countUp = keyframes`
  0% { opacity: 0; transform: translateY(20px) scale(0.8); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

// Celebration particles
const celebrate = keyframes`
  0% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
  100% { opacity: 0; transform: translateY(-50px) scale(0) rotate(360deg); }
`;

// Badge shine
const badgeShine = keyframes`
  0% { left: -100%; }
  100% { left: 200%; }
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin: 48px 0 60px;
  perspective: 1000px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: linear-gradient(135deg, rgba(79, 108, 176, 0.25) 0%, rgba(26, 15, 15, 0.4) 100%);
  border-radius: 24px;
  height: 180px;
  padding: 32px;
  border: 2px solid transparent;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  animation: ${countUp} 0.8s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: backwards;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(250, 237, 38, 0.6), rgba(79, 108, 176, 0.6));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -100%;
    width: 60%;
    height: 200%;
    background: linear-gradient(90deg, transparent, rgba(250, 237, 38, 0.3), transparent);
    transform: rotate(30deg);
  }

  &:hover {
    transform: translateY(-12px) scale(1.05) rotateX(5deg);
    box-shadow: 0 20px 60px rgba(79, 108, 176, 0.6), 0 0 40px rgba(250, 237, 38, 0.4);
    background: linear-gradient(135deg, rgba(79, 108, 176, 0.4) 0%, rgba(26, 15, 15, 0.5) 100%);

    &:before {
      opacity: 1;
    }

    &:after {
      animation: ${badgeShine} 1.5s ease;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    height: 150px;
    padding: 24px;
    border-radius: 14px;
  }

  @media ${props => props.theme.breakpoints.md} {
    height: 140px;
    padding: 20px;
    border-radius: 12px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 120px;
    padding: 16px;
    border-radius: 10px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 52px;
  letter-spacing: 0.01em;
  color: #00E6FF;
  margin-bottom: 12px;
  text-shadow: 0 4px 8px rgba(250, 237, 38, 0.3);
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &:after {
    content: '+';
    position: absolute;
    right: -18px;
    top: 0;
    font-size: 0.6em;
    opacity: 0.7;
  }

  ${Box}:hover & {
    transform: scale(1.15);
    color: #FFFFFF;
    text-shadow: 0 0 20px rgba(250, 237, 38, 0.8), 0 0 40px rgba(250, 237, 38, 0.5);
    animation: ${celebrate} 0.6s ease-out;
  }

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 42px;
    line-height: 46px;
    margin-bottom: 10px;
    
    &:after {
      right: -16px;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 8px;
    
    &:after {
      right: -14px;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 6px;
    
    &:after {
      right: -12px;
      font-size: 0.5em;
    }
  }
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.08em;
  position: relative;
  padding-bottom: 8px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #00E6FF 0%, transparent 100%);
    transition: width 0.4s ease;
  }

  ${Box}:hover & {
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0.12em;

    &:before {
      width: 60%;
    }
  }

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 13px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 12px;
    line-height: 18px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 11px;
    line-height: 16px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
