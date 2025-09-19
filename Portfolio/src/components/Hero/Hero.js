import React from 'react';

import { Section, SectionText, SectionTitle, B, AnimatedKeyword } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, section } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle  main center >
      Welcome to my Brain wired using React.js, Next.js and Express.js
    </SectionTitle>
    <SectionTitle>Professional Agenda</SectionTitle>
    <SectionText>
     <AnimatedKeyword> Software Developer </AnimatedKeyword> with <AnimatedKeyword sub> 4+ years </AnimatedKeyword> of experience delivering <AnimatedKeyword sub>high-performance, scalable solutions</AnimatedKeyword> in retail technology. Recognized for <AnimatedKeyword sub>reducing operational costs by 40%, cutting bugs by 25%, improving API and site performance by 15%</AnimatedKeyword>. Expert in <AnimatedKeyword sub >Node.js/TypeScript, Azure Cloud, microservices</AnimatedKeyword> and both <AnimatedKeyword sub >SQL and NoSQL databases</AnimatedKeyword>. Adept at independently <AnimatedKeyword sub>architecting, developing, and optimizing full-stack applications</AnimatedKeyword> while ensuring alignment with business objectives.    </SectionText>
    <Button onClick={()=> window.location = "https://www.linkedin.com/in/simarjeet-singh-johar"}>Learn More</Button>
    </LeftSection>
</Section>
);

export default Hero;