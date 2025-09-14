import React from 'react';

import { Section, SectionText, SectionTitle, B } from '../../styles/GlobalComponents';
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
     <B sub> Software Developer </B> with <B sub> 4+ years </B> of experience delivering <B sub>high-performance, scalable solutions</B> in retail technology. Recognized for <B sub>reducing operational costs by 40%, cutting bugs by 25%, improving API and site performance by 15%</B>. Expert in <B sub >Node.js/TypeScript, Azure Cloud, microservices</B> and both <B sub >SQL and NoSQL databases</B>. Adept at independently <B sub>architecting, developing, and optimizing full-stack applications</B> while ensuring alignment with business objectives.    </SectionText>
    <Button onClick={()=> window.location = "https://www.linkedin.com/in/simarjeet-singh-johar"}>Learn More</Button>
    </LeftSection>
</Section>
);

export default Hero;