import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 24px 0')};
  margin: 0 auto;
  width: 80%;
  max-width: 1024px;
  box-sizing: border-box;
  position: relative;
  overflow: ${(props) => (props.grid ? 'visible' : 'hidden')};
  z-index: 1;


  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => (props.nopadding ? '0' : '24px')};
    width: 100%;
  }

    @media ${(props) => props.theme.breakpoints.sn} {
    padding: ${(props) => (props.nopadding ? '0' : '24px')};
    width: 80%;
  }
`

export const SectionTitle = styled.h2`
  font-weight: ${(props) => props.main ? '700' : '500'};
  font-size: ${(props) => props.main ? '35px' : '25px'};
  line-height: ${(props) => props.main ? '30px' : '30px'};
  width:100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '0px 0 15px' : '0'};


  @media ${props => props.theme.breakpoints.sn}{
    font-size: ${(props) => props.main ? '28px' : '30px'};
    line-height: ${(props) => props.main ? '25px' : '35px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 80%;
  }


`

export const SectionText = styled.p`
  max-width: 90%;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  padding-bottom: 3rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: 100px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
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
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
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
  animation: ${slideIn} 0.6s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  opacity: 0;
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
  