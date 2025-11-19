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

const highlightGlow = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 8px rgba(0, 230, 255, 0.4),
      0 0 15px rgba(138, 43, 226, 0.3);
  }
  50% {
    text-shadow: 
      0 0 12px rgba(138, 43, 226, 0.5),
      0 0 20px rgba(0, 230, 255, 0.4);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const sparkleRotate = keyframes`
  0%, 100% {
    transform: rotate(0deg) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: rotate(10deg) scale(1.15);
    opacity: 1;
  }
`;

const textPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
`;

const badgeShine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const floatUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
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
    padding: ${({ $scrolled }) => ($scrolled ? '0.8rem 1.5rem' : '1rem 2rem')};
    gap: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: ${({ $scrolled }) => ($scrolled ? '0.6rem 1rem' : '0.8rem 1rem')};
    gap: 0.8rem;
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
    gap: 0.8rem;
    align-items: flex-start;
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
    width: 60px;
    height: 60px;
    
    &::before {
      inset: -6px;
      filter: blur(12px);
    }
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
  gap: 0.8rem;
  position: relative;
  z-index: 10;
  max-width: 600px;
  flex: 1;
  
  .availability-container {
    position: relative;
    width: fit-content;
  }
  
  .availability-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.75rem 0.4rem 0.5rem;
    width: fit-content;
    
    background: linear-gradient(
      135deg,
      rgba(10, 15, 25, 0.95) 0%,
      rgba(15, 20, 35, 0.98) 100%
    );
    
    border: 1px solid rgba(0, 230, 255, 0.4);
    border-radius: 50px;
    backdrop-filter: blur(20px) saturate(180%);
    
    box-shadow: 
      0 4px 20px rgba(0, 230, 255, 0.15),
      0 8px 32px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(0, 230, 255, 0.15) 50%,
        transparent 100%
      );
      animation: ${shimmer} 3s ease-in-out infinite;
    }
    
    &:hover {
      transform: translateY(-2px);
      border-color: rgba(0, 230, 255, 0.7);
      box-shadow: 
        0 6px 28px rgba(0, 230, 255, 0.3),
        0 12px 40px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
      
      .badge-icon {
        transform: scale(1.1) rotate(5deg);
      }
      
      .badge-status {
        background-position: 200% center;
      }
    }
  }
  
  .badge-icon {
    font-size: 1.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 6px rgba(0, 230, 255, 0.5));
  }
  
  .badge-content {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    line-height: 1.1;
  }
  
  .badge-label {
    font-size: 0.55em;
    font-weight: 600;
    color: rgba(0, 230, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
  
  .badge-status {
    font-size: 0.7em;
    font-weight: 700;
    background: linear-gradient(90deg, #00E6FF 0%, #FFFFFF 50%, #00E6FF 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.02em;
    transition: background-position 0.3s ease;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 500px;
    
    .availability-badge {
      padding: 0.6rem 1.1rem;
      gap: 0.5rem;
      
      .availability-text {
        font-size: 0.84em;
        letter-spacing: 0.09em;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 0.3rem;
    max-width: 100%;
    
    .availability-badge {
      padding: 0.25rem 0.5rem 0.25rem 0.35rem;
      gap: 0.25rem;
      
      .badge-icon {
        font-size: 0.85em;
      }
    }
    
    .badge-content {
      gap: 0.05rem;
    }
    
    .badge-label {
      font-size: 0.48em;
    }
    
    .badge-status {
      font-size: 0.55em;
    }
  }
`;

export const NameTitle = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-weight: 800;
  line-height: 1.15;
  
  .first-name {
    font-size: 2rem;
    background: linear-gradient(135deg, #00E6FF 0%, #FFFFFF 40%, #8A2BE2 70%, #00BFFF 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.03em;
    animation: ${shimmer} 8s linear infinite;
    text-shadow: 0 0 30px rgba(0, 230, 255, 0.3);
  }
  
  .last-name {
    font-size: 1.5rem;
    background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.95) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    .first-name { font-size: 1.5rem; }
    .last-name { font-size: 1.2rem; }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 0.15rem;
    .first-name { 
      font-size: 0.95rem;
      line-height: 1.1;
    }
    .last-name { 
      font-size: 0.75rem;
      line-height: 1.1;
    }
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
    font-size: 0.6rem;
    padding: 0.2rem 0.5rem;
    gap: 0.25rem;
    
    svg {
      width: 10px;
      height: 10px;
    }
  }
`;

export const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.88rem;
  
  .pulse-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00FFA3 0%, #00E6FF 100%);
    box-shadow: 
      0 0 15px rgba(0, 255, 163, 1),
      0 0 30px rgba(0, 255, 163, 0.6),
      inset 0 0 5px rgba(255, 255, 255, 0.5);
    animation: ${glowPulse} 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  
  .certifications {
    display: block;
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: 0.08em;
    font-size: 0.92em;
    font-weight: 500;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 0.85rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.65rem;
    gap: 0.4rem;
    
    .pulse-dot {
      width: 6px;
      height: 6px;
    }
    
    .certifications {
      font-size: 0.8em;
      letter-spacing: 0.04em;
    }
  }
`;

// Navigation section with futuristic cards
export const NavSection = styled.nav`
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.lg} {
    gap: 0.8rem;
    max-width: 600px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-column: 1;
    grid-row: 2;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 0.5rem;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const NavCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.6rem;
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
    padding: 1rem 1.4rem;
    gap: 0.9rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0.9rem 1.2rem;
    gap: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.4rem 0.5rem;
    gap: 0.4rem;
    border-radius: 10px;
    flex: 1;
    min-width: 0;
    justify-content: center;
  }
`;

export const NavIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: inherit;
  flex-shrink: 0;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 14px;
    height: 14px;
  }
`;

export const NavLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  white-space: nowrap;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.7rem;
  }
`;

export const NavMeta = styled.div`
  font-size: 0.75rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.15em;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none; // Hide meta text on mobile
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
    gap: 0.5rem;
    justify-content: center;
  }
`;

export const SocialOrb = styled.a`
  position: relative;
  width: 42px;
  height: 42px;
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

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

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
    width: 40px;
    height: 40px;
    
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 28px;
    height: 28px;
    border-width: 1.5px;
    
    svg {
      width: 0.95rem;
      height: 0.95rem;
    }
    
    .tooltip {
      display: none; // Hide tooltips on mobile
    }
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