import styled, { keyframes, css } from 'styled-components';

// Animations
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

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 230, 255, 0.7); }
  50% { box-shadow: 0 0 0 10px rgba(0, 230, 255, 0); }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
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

  & > div {
    @media ${props => props.theme.breakpoints.md} {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
  }

  @media ${props => props.theme.breakpoints.lg}{
    padding: 28px 30px;
    width: 92%;
  }

  @media ${props => props.theme.breakpoints.md}{
    padding: 26px 28px;
    width: 94%;
  }

  @media ${props => props.theme.breakpoints.sm}{
    padding: 24px 20px;
    width: 95%;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeInUp} 0.6s ease-out;

  @media ${props => props.theme.breakpoints.sm} {
    gap: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const FormInput = styled.input`
  padding: 14px 18px;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(26, 15, 15, 0.25) 100%);
  border: 2px solid ${props => props.hasError ? 'rgba(255, 82, 82, 0.6)' : 'rgba(138, 43, 226, 0.4)'};
  border-radius: 12px;
  color: #FFFFFF;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;

  ${props => props.hasError && css`
    animation: ${shake} 0.5s ease;
  `}

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: ${props => props.hasError ? 'rgba(255, 82, 82, 0.8)' : 'rgba(0, 230, 255, 0.6)'};
    background: linear-gradient(135deg, rgba(79, 108, 176, 0.25) 0%, rgba(26, 15, 15, 0.35) 100%);
    box-shadow: 0 4px 20px ${props => props.hasError ? 'rgba(255, 82, 82, 0.3)' : 'rgba(0, 230, 255, 0.3)'};
  }

  &:hover {
    border-color: ${props => props.hasError ? 'rgba(255, 82, 82, 0.7)' : 'rgba(79, 108, 176, 0.6)'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

export const FormTextarea = styled.textarea`
  padding: 14px 18px;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(26, 15, 15, 0.25) 100%);
  border: 2px solid ${props => props.hasError ? 'rgba(255, 82, 82, 0.6)' : 'rgba(138, 43, 226, 0.4)'};
  border-radius: 12px;
  color: #FFFFFF;
  font-size: 15px;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  outline: none;

  ${props => props.hasError && css`
    animation: ${shake} 0.5s ease;
  `}

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: ${props => props.hasError ? 'rgba(255, 82, 82, 0.8)' : 'rgba(0, 230, 255, 0.6)'};
    background: linear-gradient(135deg, rgba(79, 108, 176, 0.25) 0%, rgba(26, 15, 15, 0.35) 100%);
    box-shadow: 0 4px 20px ${props => props.hasError ? 'rgba(255, 82, 82, 0.3)' : 'rgba(0, 230, 255, 0.3)'};
  }

  &:hover {
    border-color: ${props => props.hasError ? 'rgba(255, 82, 82, 0.7)' : 'rgba(79, 108, 176, 0.6)'};
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(138, 43, 226, 0.2);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 230, 255, 0.5);
    border-radius: 10px;
    
    &:hover {
      background: rgba(0, 230, 255, 0.7);
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px 16px;
    font-size: 14px;
    min-height: 100px;
  }
`;

export const SubmitButton = styled.button`
  padding: 16px 40px;
  background: linear-gradient(135deg, #8A2BE2 0%, #00E6FF 100%);
  border: none;
  border-radius: 50px;
  color: #0E131F;
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  margin-top: 8px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 230, 255, 0.4);
    animation: ${pulse} 1.5s infinite;

    &:before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      animation: none;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 230, 255, 0.3);
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 14px 32px;
    font-size: 14px;
  }
`;

export const FormMessage = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-top: ${props => props.type === 'error' ? '0' : '8px'};
  animation: ${fadeInUp} 0.3s ease-out;

  ${props => props.type === 'error' && css`
    background: rgba(255, 82, 82, 0.15);
    border: 1px solid rgba(255, 82, 82, 0.5);
    color: #ff5252;
  `}

  ${props => props.type === 'success' && css`
    background: rgba(76, 175, 80, 0.15);
    border: 1px solid rgba(76, 175, 80, 0.5);
    color: #4caf50;
  `}

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 13px;
    padding: 10px 14px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(26, 15, 15, 0.25) 100%);
  padding: 32px;
  border-radius: 16px;
  border: 2px solid rgba(138, 43, 226, 0.3);
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;

  @media ${props => props.theme.breakpoints.md} {
    padding: 28px;
    gap: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 24px;
    gap: 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(8px);
  }
`;

export const InfoIcon = styled.div`
  font-size: 28px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, rgba(0, 230, 255, 0.2) 100%);
  border-radius: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${InfoItem}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 24px rgba(0, 230, 255, 0.3);
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    width: 45px;
    height: 45px;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    font-size: 16px;
    color: #00E6FF;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  span, a {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
  }

  a {
    transition: all 0.3s ease;
    
    &:hover {
      color: #FFFFFF;
      text-decoration: underline;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    strong {
      font-size: 15px;
    }
    
    span, a {
      font-size: 13px;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(138, 43, 226, 0.3);

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 20px;
    padding-top: 20px;
  }
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, rgba(26, 15, 15, 0.3) 100%);
  border: 2px solid rgba(138, 43, 226, 0.4);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  svg {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #00E6FF 0%, #8A2BE2 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-4px) scale(1.1);
    border-color: rgba(0, 230, 255, 0.6);
    color: #0E131F;
    box-shadow: 0 8px 24px rgba(0, 230, 255, 0.4);

    &:before {
      opacity: 1;
    }

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 44px;
    height: 44px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
