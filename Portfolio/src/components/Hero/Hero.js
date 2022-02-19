import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to Simarjeet's Portfolio<br />
      Made usign React an Next.js
    </SectionTitle>
    <SectionText>
    An experienced professional and dedicated individual with strong documentation and more than 1 year of experience in the retail website domain, particularly in HTML, JavaScript, Java/J2EE, C, C++, UX/UI and DBMS. Ability to prioritize multiple tasks with strong communications skills. Skilled in using relational databases such as MySQL and Postgres SQL to simplify complex data models. 
    </SectionText>
    <Button onClick={()=> window.location = "https://www.linkedin.com/feed/"}>Learn More</Button>
    </LeftSection>
</Section>
);

export default Hero;