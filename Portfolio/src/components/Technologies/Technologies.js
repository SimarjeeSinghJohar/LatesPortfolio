import React, { useState, useEffect, useRef } from 'react';
import { DiAtlassian, DiDatabase, DiFirebase, DiGithub, DiJava, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { 
  List, 
  ListContainer, 
  ListItem, 
  ListParagraph, 
  ListTitle, 
  TechSection,
  SkillsGrid,
  SkillCard,
  SkillName,
  ProgressBarContainer,
  ProgressBar,
  ProgressFill,
  PercentageText
} from './TechnologiesStyles';

// Skills data with proficiency percentages
const skillsData = [
  { name: 'TypeScript', percentage: 92, category: 'frontend' },
  { name: 'JavaScript', percentage: 90, category: 'frontend' },
  { name: 'React.js', percentage: 88, category: 'frontend' },
  { name: 'Node.js', percentage: 95, category: 'backend' },
  { name: 'Express.js', percentage: 92, category: 'backend' },
  { name: 'Java', percentage: 85, category: 'backend' },
  { name: 'Spring Boot', percentage: 82, category: 'backend' },
  { name: 'Azure Cosmos DB', percentage: 90, category: 'database' },
  { name: 'MongoDB', percentage: 85, category: 'database' },
  { name: 'PostgreSQL', percentage: 88, category: 'database' },
  { name: 'Azure SQL', percentage: 85, category: 'database' },
  { name: 'Azure Functions', percentage: 90, category: 'cloud' },
  { name: 'Docker', percentage: 85, category: 'cloud' },
  { name: 'Kubernetes', percentage: 80, category: 'cloud' },
  { name: 'CI/CD', percentage: 88, category: 'cloud' },
  { name: 'REST API', percentage: 95, category: 'tools' }
];

const Technologies = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const skillsRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Animate skills with staggered delay
            skillsData.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills((prev) => [...prev, skill.name]);
              }, index * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <Section id='tech' style={{ zIndex: 600, position: 'relative' }}>
      <TechSection>
        <SectionDivider />

        <SectionTitle>
          Technical Skills
        </SectionTitle>
        <SectionText>
          Specialized in full-stack and cloud development with expertise in TypeScript, Node.js, React.js, and Azure Cloud services. 
          Experienced in building scalable microservices, serverless architectures, and high-performance applications.
        </SectionText>

        {/* Animated Skills Progress Bars */}
        <SkillsGrid ref={skillsRef} className="animate-on-scroll">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={skill.name}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <SkillName>{skill.name}</SkillName>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressFill 
                    percentage={skill.percentage}
                    animate={animatedSkills.includes(skill.name)}
                  />
                </ProgressBar>
                <PercentageText 
                  animate={animatedSkills.includes(skill.name)}
                >
                  {animatedSkills.includes(skill.name) ? `${skill.percentage}%` : '0%'}
                </PercentageText>
              </ProgressBarContainer>
            </SkillCard>
          ))}
        </SkillsGrid>

        {/* Original Technology Categories */}
        <List>
          <ListItem>
            <DiReact size="3rem" color='yellow'/>
            <ListContainer>
              <ListTitle>
                Languages & Frameworks
              </ListTitle>
              <ListParagraph>
                TypeScript, JavaScript, Node.js, Express.js, React.js, Java, Spring Boot
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <DiDatabase size="3rem" color='yellow'/>
            <ListContainer>
              <ListTitle>
                Databases
              </ListTitle>
              <ListParagraph>
                Azure Cosmos DB, MongoDB, PostgreSQL, Microsoft SQL Server/Azure SQL
              </ListParagraph>
            </ListContainer>
          </ListItem>

          <ListItem>
            <DiFirebase size="3rem" color='yellow'/>
            <ListContainer>
              <ListTitle>Cloud & DevOps</ListTitle>
              <ListParagraph>
                Azure Functions, Logic Apps, Docker, Kubernetes, Git, CI/CD, REST API, Serverless Architecture, Azure Queues, Service Bus, APIM, Azure Storage
              </ListParagraph>
            </ListContainer>
          </ListItem>

          <ListItem>
            <DiAtlassian size="3rem" color='yellow'/>
            <ListContainer>
              <ListTitle>Security & Authentication</ListTitle>
              <ListParagraph>
                OAuth2, JWT, SSO, MFA, Fraud Detection, Vulnerability Scanning, Secure Coding Practices
              </ListParagraph>
            </ListContainer>
          </ListItem>

          <ListItem>
            <DiGithub size="3rem" color='yellow'/>
            <ListContainer>
              <ListTitle>Tools & Testing</ListTitle>
              <ListParagraph>
                SwaggerHub, Pactflow, Mocha, Jest, GitHub Actions, Jira, New Relic, Quantum Metric, GitHub, Azure DevOps
              </ListParagraph>
            </ListContainer>
          </ListItem>

          <ListItem>
            <DiVisualstudio size="3rem" color='yellow'/>
            <ListContainer>
              <ListTitle>Methodologies</ListTitle>
              <ListParagraph>
                Scrum/Agile, Kanban, Planning Poker, SAFe6 Certified, SDLC, Product Development, API Management, APIM Onboarding
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
      </TechSection>
    </Section>
  );
};

export default Technologies;
