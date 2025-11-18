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
          Simarjeet Singh Johar
        </HeroTitle>
        <SectionDivider />
        <HeroSubtitle>
          <strong>Software Developer | Software Engineer | Full-Stack & Cloud Specialist</strong>
          <br /><br />
          Software developer with expertise in full-stack and cloud development, specializing in retail technology. 
          Reduced operational costs by <strong>40%</strong> and cut bugs by <strong>25%</strong> through process improvements and automation. 
          Improved site performance by <strong>15%</strong> by streamlining checkout and cart flows, saving <strong>7,000 user hours annually</strong>. 
          Promoted from Backend Developer to Software Developer in 18 months.
        </HeroSubtitle>
        <HeroButton onClick={handleLearnMore}>
          View LinkedIn Profile
        </HeroButton>
      </LeftSection>
    </Section>
  );
};

export default Hero;