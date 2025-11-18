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
          <strong>Full-Stack Developer | Cloud Solutions Engineer | Problem Solver</strong>
          <br /><br />
          I turn ideas into powerful digital solutions. Whether it's building lightning-fast web applications, 
          architecting cloud infrastructure, or optimizing systems for peak performance, I thrive on creating 
          technology that makes a difference.
          <br /><br />
          With expertise in <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>cloud platforms</strong>, 
          I've delivered solutions that <strong>cut operational costs by 40%</strong>, <strong>reduced bugs by 25%</strong>, 
          and <strong>improved performance by 15%</strong> — saving thousands of user hours and enhancing experiences 
          for millions of customers.
          <br /><br />
          <span style={{ color: '#00E6FF', fontSize: '1.1rem' }}>
            Ready to bring your next project to life? Let's connect.
          </span>
        </HeroSubtitle>
        <HeroButton onClick={handleLearnMore}>
          View My Work →
        </HeroButton>
      </LeftSection>
    </Section>
  );
};

export default Hero;