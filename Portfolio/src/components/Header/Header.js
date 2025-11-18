import React, { useState, useEffect, useRef } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { HiSparkles, HiCode, HiLightningBolt } from 'react-icons/hi';
import { 
  Container, 
  LiquidBackground,
  HolographicLayer,
  ParticleCanvas,
  ProfileSection,
  HolographicFrame,
  PortraitImage,
  HoloOverlay,
  GlowRing,
  InfoPanel,
  NameTitle,
  RoleTag,
  StatusIndicator,
  NavSection,
  NavCard,
  NavIcon,
  NavLabel,
  NavMeta,
  SocialSection,
  SocialOrb,
  MagneticWrapper,
  CommandPalette
} from './HeaderStyles';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeNav, setActiveNav] = useState('');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { id: 'tech', label: 'Skills', icon: HiCode, meta: 'Tech Stack' },
    { id: 'exp', label: 'Experience', icon: HiLightningBolt, meta: 'Journey' },
    { id: 'projects', label: 'Projects', icon: HiSparkles, meta: 'Showcase' },
    { id: 'about', label: 'About', icon: HiSparkles, meta: 'Story' }
  ];

  const socialLinks = [
    { icon: AiFillGithub, href: 'https://github.com/', label: 'GitHub', color: '#00E6FF' },
    { icon: AiFillLinkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn', color: '#8A2BE2' },
    { icon: AiFillInstagram, href: 'https://www.instagram.com/', label: 'Instagram', color: '#FF1493' }
  ];

  return (
    <Container ref={headerRef} $scrolled={scrolled}>
      <LiquidBackground $mouseX={mousePos.x} $mouseY={mousePos.y} $scrolled={scrolled} />
      <HolographicLayer $mouseX={mousePos.x} $mouseY={mousePos.y} />
      <ParticleCanvas $scrolled={scrolled} />

      <ProfileSection>
        <MagneticWrapper>
          <HolographicFrame>
            <GlowRing />
            <PortraitImage 
              src="/images/2A8A0475.JPG" 
              alt="Simarjeet Singh Johar - Software Developer"
            />
            <HoloOverlay $mouseX={mousePos.x} $mouseY={mousePos.y} />
          </HolographicFrame>
        </MagneticWrapper>

        <InfoPanel>
          <NameTitle>
            <span className="first-name">Simarjeet</span>
            <span className="last-name">Singh Johar</span>
          </NameTitle>
          <RoleTag>
            <HiSparkles size={16} />
            <span>Software Developer</span>
          </RoleTag>
          <StatusIndicator>
            <span className="pulse-dot"></span>
            <span className="text">Cloud-Native · AZ-Certified · SAFE@6 Practitioner</span>
          </StatusIndicator>
        </InfoPanel>
      </ProfileSection>

      <NavSection>
        {navItems.map((item) => (
          <NavCard
            key={item.id}
            href={`#${item.id}`}
            $active={activeNav === item.id}
            onMouseEnter={() => setActiveNav(item.id)}
            onMouseLeave={() => setActiveNav('')}
          >
            <NavIcon as={item.icon} />
            <div>
              <NavLabel>{item.label}</NavLabel>
              <NavMeta>{item.meta}</NavMeta>
            </div>
          </NavCard>
        ))}
      </NavSection>

      <SocialSection>
        {socialLinks.map((social) => (
          <MagneticWrapper key={social.label}>
            <SocialOrb
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              $color={social.color}
            >
              <social.icon size="2rem" />
              <span className="tooltip">{social.label}</span>
            </SocialOrb>
          </MagneticWrapper>
        ))}
      </SocialSection>
    </Container>
  );
};

export default Header;