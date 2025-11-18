import styled, { keyframes } from 'styled-components';

// Cutting-edge keyframe animations
const liquidMorph = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: translate3d(-2%, 3%, 0) rotate(5deg);
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
    transform: translate3d(3%, -2%, 0) rotate(-5deg);
  }
  75% {
    border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%;
    transform: translate3d(-3%, -3%, 0) rotate(3deg);
  }
`;

const holoScan = keyframes`
  0% {
    transform: translateY(-100%) scaleY(0.3);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(200%) scaleY(0.4);
    opacity: 0;
  }
`;

const particleFloat = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.3;
  }
  50% {
    transform: translate3d(var(--float-x, 20px), var(--float-y, -30px), 0);
    opacity: 0.8;
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 230, 255, 0.5),
                0 0 40px rgba(0, 230, 255, 0.3),
                inset 0 0 20px rgba(0, 230, 255, 0.15);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 230, 255, 0.9),
                0 0 80px rgba(138, 43, 226, 0.5),
                inset 0 0 30px rgba(0, 191, 255, 0.4);
  }
`;

const shimmerSlide = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(200%) rotate(45deg);
  }
`;

const magneticFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ $scrolled }) => ($scrolled ? '1.2rem 3rem' : '2rem 4rem')};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 3rem;
  z-index: 1000;
  background: ${({ $scrolled }) =>
    $scrolled
      ? 'rgba(5, 6, 10, 0.85)'
      : 'rgba(5, 6, 10, 0.6)'};
  backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(0, 230, 255, 0.2);
  box-shadow: ${({ $scrolled }) =>
    $scrolled 
      ? '0 8px 32px rgba(0, 0, 0, 0.6)' 
      : '0 16px 64px rgba(0, 0, 0, 0.4)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: ${({ $scrolled }) => ($scrolled ? '1rem 2.5rem' : '1.6rem 3rem')};
    gap: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    padding: 1.4rem 2rem;
    gap: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1.2rem 1rem;
    gap: 1rem;
  }
`;

// Liquid morphing background layer - Enhanced color scheme
export const LiquidBackground = styled.div`
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 140%;
  background: radial-gradient(
      ellipse at ${({ $mouseX = 0.5 }) => $mouseX * 100}% ${({ $mouseY = 0.5 }) => $mouseY * 100}%,
      rgba(0, 230, 255, 0.35) 0%,
      rgba(138, 43, 226, 0.25) 30%,
      transparent 70%
    ),
    radial-gradient(
      ellipse at ${({ $mouseX = 0.5 }) => (1 - $mouseX) * 100}% ${({ $mouseY = 0.5 }) => (1 - $mouseY) * 100}%,
      rgba(255, 20, 147, 0.3) 0%,
      rgba(0, 191, 255, 0.2) 40%,
      transparent 80%
    );
  filter: blur(60px);
  opacity: ${({ $scrolled }) => ($scrolled ? 0.5 : 0.8)};
  animation: ${liquidMorph} 20s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.6s ease;
`;

// Holographic scanning effect - Enhanced colors
export const HolographicLayer = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 230, 255, 0.08) 50%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
`;

// Floating particle system - Enhanced colors
export const ParticleCanvas = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(0, 230, 255, 0.5) 2px, transparent 2px),
    radial-gradient(circle at 60% 70%, rgba(138, 43, 226, 0.45) 1.5px, transparent 1.5px),
    radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.4) 1px, transparent 1px),
    radial-gradient(circle at 40% 90%, rgba(255, 20, 147, 0.5) 2px, transparent 2px);
  background-size: 300px 250px;
  opacity: ${({ $scrolled }) => ($scrolled ? 0.4 : 0.7)};
  animation: ${particleFloat} 15s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.6s ease;
`;

// Profile section with holographic portrait
export const ProfileSection = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-column: 1;
    grid-row: 1;
    justify-content: flex-start;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const MagneticWrapper = styled.div`
  position: relative;
  animation: ${magneticFloat} 4s ease-in-out infinite;
  
  &:hover {
    animation-play-state: paused;
    transform: scale(1.05);
  }
  
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

// Crystal-clear holographic portrait frame - Enhanced colors
export const HolographicFrame = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(135deg, rgba(0, 230, 255, 0.25), rgba(138, 43, 226, 0.25));
  padding: 4px;
  cursor: pointer;
  overflow: visible;
  
  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: inherit;
    background: linear-gradient(
      45deg,
      rgba(0, 230, 255, 0.5),
      rgba(138, 43, 226, 0.5),
      rgba(255, 20, 147, 0.5),
      rgba(0, 191, 255, 0.5)
    );
    filter: blur(20px);
    opacity: 0.6;
    z-index: -1;
  }

  &:hover {
    animation: ${liquidMorph} 8s ease-in-out infinite;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 100px;
    height: 100px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 85px;
    height: 85px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 75px;
    height: 75px;
  }
`;

export const GlowRing = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: inherit;
  background: conic-gradient(
    from 0deg,
    rgba(0, 230, 255, 0.9),
    rgba(138, 43, 226, 0.9),
    rgba(255, 20, 147, 0.9),
    rgba(0, 191, 255, 0.9),
    rgba(0, 230, 255, 0.9)
  );
  animation: ${glowPulse} 3s ease-in-out infinite;
  filter: blur(4px);
  z-index: -1;
`;

// Portrait with maximum clarity
export const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  position: relative;
  z-index: 2;
  filter: contrast(1.1) brightness(1.05) saturate(1.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              inset 0 0 20px rgba(255, 255, 255, 0.1);
  
  &:hover {
    filter: contrast(1.15) brightness(1.1) saturate(1.3);
  }
  
  transition: filter 0.3s ease;
`;

export const HoloOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    ${({ $mouseX = 0.5, $mouseY = 0.5 }) => `${$mouseX * 360}deg`},
    rgba(0, 230, 255, 0.15) 0%,
    transparent 50%,
    rgba(138, 43, 226, 0.15) 100%
  );
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 3;
`; 

// Info panel with glassmorphic design
export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 0.4rem;
  }
`;

export const NameTitle = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-weight: 800;
  line-height: 1.1;
  
  .first-name {
    font-size: 1.8rem;
    background: linear-gradient(135deg, #00E6FF 0%, #FFF 50%, #00BFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.02em;
  }
  
  .last-name {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    .first-name { font-size: 1.5rem; }
    .last-name { font-size: 1.2rem; }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    .first-name { font-size: 1.3rem; }
    .last-name { font-size: 1rem; }
  }
`;

export const RoleTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(0, 230, 255, 0.15);
  border: 1px solid rgba(0, 230, 255, 0.5);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #00E6FF;
  width: fit-content;
  backdrop-filter: blur(10px);

  svg {
    color: #00E6FF;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
    gap: 0.4rem;
  }
`;

export const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  
  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00FFA3;
    box-shadow: 0 0 12px rgba(0, 255, 163, 0.9);
    animation: ${glowPulse} 2s ease-in-out infinite;
  }
  
  .text {
    letter-spacing: 0.05em;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.7rem;
    
    .pulse-dot {
      width: 6px;
      height: 6px;
    }
  }
`;

// Navigation section with futuristic cards
export const NavSection = styled.nav`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints.lg} {
    gap: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-column: 1;
    grid-row: 2;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 0.8rem;
  }
`;

export const NavCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1.4rem;
  background: ${({ $active }) =>
    $active
      ? 'rgba(0, 230, 255, 0.15)'
      : 'rgba(5, 6, 10, 0.7)'};
  border: 1px solid ${({ $active }) =>
    $active
      ? 'rgba(0, 230, 255, 0.6)'
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  text-decoration: none;
  color: ${({ $active }) => ($active ? '#00E6FF' : 'rgba(255, 255, 255, 0.85)')};
  backdrop-filter: blur(12px);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 230, 255, 0.15), rgba(138, 43, 226, 0.15));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 230, 255, 0.7);
    box-shadow: 0 8px 24px rgba(0, 230, 255, 0.3);
    
    &::before {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 0.8rem 1.2rem;
    gap: 0.7rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0.7rem 1rem;
    gap: 0.6rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.6rem 0.9rem;
    gap: 0.5rem;
  }
`;

export const NavIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: inherit;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 16px;
    height: 16px;
  }
`;

export const NavLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;

export const NavMeta = styled.div`
  font-size: 0.7rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.15em;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.65rem;
  }
`;

// Social section with 3D orbs
export const SocialSection = styled.div`
  grid-column: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: relative;
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-column: 1;
    grid-row: 3;
    justify-content: center;
    gap: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 1.2rem;
  }
`;

export const SocialOrb = styled.a`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 6, 10, 0.8);
  border: 2px solid ${({ $color }) => $color || 'rgba(255, 255, 255, 0.2)'};
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  .tooltip {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    padding: 0.3rem 0.8rem;
    background: rgba(5, 6, 10, 0.95);
    border: 1px solid ${({ $color }) => $color || 'rgba(0, 230, 255, 0.6)'};
    border-radius: 8px;
    font-size: 0.7rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.1);
    border-color: ${({ $color }) => $color || '#00E6FF'};
    color: ${({ $color }) => $color || '#00E6FF'};
    box-shadow: 0 8px 24px ${({ $color }) => $color ? `${$color}40` : 'rgba(0, 230, 255, 0.5)'};
    
    .tooltip {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 45px;
    height: 45px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 42px;
    height: 42px;
  }
`;

// Command palette at bottom
export const CommandPalette = styled.div`
  position: absolute;
  bottom: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem;
  background: rgba(5, 6, 10, 0.8);
  border: 1px solid rgba(0, 230, 255, 0.3);
  border-radius: 20px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  z-index: 10;
  opacity: ${({ $scrolled }) => ($scrolled ? 0 : 1)};
  transition: opacity 0.4s ease;

  svg {
    color: #00E6FF;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.65rem;
    padding: 0.3rem 0.9rem;
    bottom: 0.5rem;
  }
`;