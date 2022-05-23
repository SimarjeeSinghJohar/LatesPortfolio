import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, section } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle  main center >
      Welcome to Simarjeet's Portfolio<br />
      Made usign React an Next.js
    </SectionTitle>
    <SectionTitle>Professional Summary</SectionTitle>
    <SectionText>
    An experienced professional and dedicated individual with more than 1.5 years of experience in Retail domain, particularly in React.js, Flutter, Dart, HTML, CSS, JavaScript, Java/J2EE, C++, Node.JS, UI/UX , SQL and NoSQL DBMS. Ability to prioritize multiple tasks with strong communications skills. Skilled in using relational databases such as MySQL and PostgreSQL to simplify complex data models and NoSQL databases such as MongoDB. Excellent communication, analytical, problem solving and documentation skills along with code review .    </SectionText>
    <Button onClick={()=> window.location = "https://www.linkedin.com/in/simarjeet-singh-johar"}>Learn More</Button>
    </LeftSection>
</Section>
);

export default Hero;