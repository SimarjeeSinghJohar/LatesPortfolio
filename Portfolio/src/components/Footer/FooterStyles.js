import styled, { keyframes } from "styled-components"

// Wave animation
const wave = keyframes`
  0% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(-25%) translateY(-5px); }
  100% { transform: translateX(-50%) translateY(0); }
`;

// Glow pulse
const footerGlow = keyframes`
  0%, 100% { box-shadow: 0 -4px 30px rgba(138, 43, 226, 0.2); }
  50% { box-shadow: 0 -8px 40px rgba(0, 230, 255, 0.3); }
`;

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1280px;
  padding: 3rem 48px 40px;
  margin: 0 auto 0;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(13, 13, 15, 0.8) 0%, rgba(26, 15, 15, 0.9) 100%);
  border-radius: 30px 30px 0 0;
  animation: ${footerGlow} 4s ease-in-out infinite;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8A2BE2 0%, #00E6FF 50%, #8A2BE2 100%);
    background-size: 200% auto;
    animation: ${wave} 3s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -50%;
    width: 200%;
    height: 150px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%234F6CB0' fill-opacity='0.1'/%3E%3C/svg%3E");
    background-size: 1200px 100px;
    animation: ${wave} 10s linear infinite;
    opacity: 0.3;
    pointer-events: none;
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: calc(100vw - 80px);
    padding: 1.8rem 40px 36px;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: calc(100vw - 64px);
    padding: 1.5rem 32px 32px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1rem 16px 24px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.8);
	margin-bottom: 16px;
	transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	position: relative;
	left: 0;
	text-decoration: none;

	&:before {
		content: '→';
		position: absolute;
		left: -20px;
		opacity: 0;
		transition: all 0.3s ease;
		color: #00E6FF;
	}

	&:hover {
		color: #00E6FF;
		left: 8px;
		transform: translateY(-2px);

		&:before {
			left: -16px;
			opacity: 1;
		}
	}

	@media ${props => props.theme.breakpoints.lg} {
		font-size: 17px;
		line-height: 28px;
		margin-bottom: 14px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 26px;
		margin-bottom: 12px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 20px;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.85);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
	font-weight: 500;
	font-style: italic;
  background: linear-gradient(135deg, rgba(0, 230, 255, 0.1) 0%, transparent 100%);
  border-left: 3px solid rgba(0, 230, 255, 0.5);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    border-left-color: #00E6FF;
    background: linear-gradient(135deg, rgba(0, 230, 255, 0.2) 0%, transparent 100%);
  }

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;
  gap: 16px;

  a {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover {
      transform: translateY(-4px) scale(1.1);
      filter: drop-shadow(0 8px 16px rgba(0, 230, 255, 0.5));
    }
  }

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	border-top: 2px solid rgba(138, 43, 226, 0.4);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;
	box-shadow: 0 -4px 12px rgba(138, 43, 226, 0.15);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, #00E6FF 0%, transparent 100%);
  }

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 24px;
		gap: 32px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 24px;
	text-transform: uppercase;
	color: #00E6FF;
	margin-bottom: 20px;
	letter-spacing: 1.5px;
	text-shadow: 0 2px 4px rgba(0, 230, 255, 0.2);
  position: relative;
  padding-bottom: 8px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #00E6FF 0%, rgba(138, 43, 226, 0.5) 100%);
    transition: width 0.4s ease;
  }

  &:hover:after {
    width: 100%;
  }

	@media ${props => props.theme.breakpoints.lg} {
		font-size: 13px;
		margin-bottom: 18px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 12px;
		margin-bottom: 16px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 11px;
		line-height: 14px;
		margin-bottom: 12px;
	}
`
