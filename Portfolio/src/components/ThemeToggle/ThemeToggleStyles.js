import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 40px;
  z-index: 1000;

  @media ${props => props.theme.breakpoints.md} {
    right: 32px;
    top: 90px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    right: 20px;
    top: 80px;
  }
`;

export const ToggleButton = styled.button`
  width: 70px;
  height: 35px;
  border-radius: 50px;
  border: 2px solid ${props => props.isDark ? 'rgba(250, 237, 38, 0.3)' : 'rgba(79, 108, 176, 0.3)'};
  background: ${props => props.isDark 
    ? 'linear-gradient(135deg, rgba(79, 108, 176, 0.2) 0%, rgba(26, 15, 15, 0.4) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.8) 100%)'
  };
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  box-shadow: ${props => props.isDark 
    ? '0 4px 15px rgba(0, 0, 0, 0.3)'
    : '0 4px 15px rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.isDark 
      ? '0 6px 20px rgba(250, 237, 38, 0.3)'
      : '0 6px 20px rgba(79, 108, 176, 0.3)'
    };
  }

  &:focus {
    outline: none;
    border-color: ${props => props.isDark ? '#00E6FF' : '#8A2BE2'};
  }

  &:before {
    content: '';
    position: absolute;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: ${props => props.isDark 
      ? 'linear-gradient(135deg, #00E6FF 0%, #F0D91D 100%)'
      : 'linear-gradient(135deg, #8A2BE2 0%, #3A5088 100%)'
    };
    top: 2px;
    left: ${props => props.isDark ? '3px' : '37px'};
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: ${props => props.isDark 
      ? '0 2px 8px rgba(250, 237, 38, 0.4)'
      : '0 2px 8px rgba(79, 108, 176, 0.4)'
    };
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 60px;
    height: 30px;

    &:before {
      width: 24px;
      height: 24px;
      left: ${props => props.isDark ? '2px' : '32px'};
    }
  }
`;

export const IconSun = styled.span`
  position: absolute;
  font-size: 18px;
  right: 8px;
  top: 50%;
  transform: translateY(-50%) ${props => props.isDark ? 'scale(0)' : 'scale(1)'};
  opacity: ${props => props.isDark ? 0 : 1};
  transition: all 0.3s ease;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    right: 6px;
  }
`;

export const IconMoon = styled.span`
  position: absolute;
  font-size: 18px;
  left: 8px;
  top: 50%;
  transform: translateY(-50%) ${props => props.isDark ? 'scale(1)' : 'scale(0)'};
  opacity: ${props => props.isDark ? 1 : 0};
  transition: all 0.3s ease;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    left: 6px;
  }
`;
