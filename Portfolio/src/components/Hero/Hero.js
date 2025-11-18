import React from 'react';

import { Section, SectionText, SectionDivider } from '../../styles/GlobalComponents';
import { LeftSection, HeroTitle, HeroSubtitle, HeroButton } from './HeroStyles';

const Hero = (props) => {
  const handleLearnMore = () => {
    if (typeof window !== 'undefined') {
      window.location.href = "https://www.linkedin.com/in/simarjeet-singh-johar";
    }
  };

  return (
    <Section row nopadding style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '60px 24px', marginTop: '50px' }}>
      <LeftSection>
        <HeroTitle>
          Hi, I'm Simarjeet Singh Johar
        </HeroTitle>
        <SectionDivider />
        <HeroSubtitle>
          <strong>Full-Stack Engineer | Cloud Solutions Architect | Performance Optimizer</strong>
          <br /><br />
          I craft scalable digital experiences that drive real business impact. From architecting cloud solutions 
          that <strong>slash operational costs by 40%</strong> to engineering performance optimizations that 
          <strong>save 7,000+ user hours annually</strong>, I transform complex challenges into elegant solutions.
          <br /><br />
          Specializing in <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>AWS</strong>, 
          I build modern web applications that are fast, reliable, and user-centric. 
          Promoted from Backend Developer to Software Developer in just 18 months for consistently delivering 
          exceptional results.
          <br /><br />
          <span style={{ color: '#00E6FF', fontSize: '1.1rem' }}>
            Let's build something amazing together. 🚀
          </span>
        </HeroSubtitle>
        <HeroButton onClick={handleLearnMore}>
          Connect on LinkedIn →
        </HeroButton>
      </LeftSection>
    </Section>
  );
};

export default Hero;