import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ExpSection, JobDate } from './ExperienceStyles';

const Experience = () => (
  <Section id='exp' style={{ zIndex: 600, position: 'relative' }}>
    <ExpSection>
      <SectionDivider />
      <SectionTitle>
        Experience
      </SectionTitle>
    <List>

      <ListItem>
        <ListContainer>
          <ListTitle>
            Canadian Tire Corporation, Toronto, ON - Software Developer
          </ListTitle>
          <JobDate>July 2022 - September 2025</JobDate>
          <ListParagraph>
            <ul>
              <li><strong>KTLO Site Success and Performance:</strong> Streamlined checkout and cart flows (1–1.5s faster), saving ~7,000 user hours annually. Optimized Node.js/TypeScript microservices with circuit breakers and Redis caching, boosting API performance by 15%.</li>
              <li><strong>Azure GEN2 Migration:</strong> Piloted migration to Azure Functions, modernized authentication (OAuth2, JWT, SSO, MFA), cutting operational costs by 40%. Orchestrated data pipelines using Azure Queues, Service Bus, and Cosmos DB, improving page load times by 60ms.</li>
              <li><strong>API Governance:</strong> Expanded test coverage from 72% to 90%, reducing bugs by 25%. Implemented Swagger/OpenAPI documentation system across 75% of microservices, slashing integration time by 20%.</li>
              <li><strong>Leadership:</strong> Decreased incident resolution time from 6 hours to 2 hours. Increased feature velocity by 20% through collaborative strategies with Architects and Product Managers.</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />

      <ListItem>
        <ListContainer>
          <ListTitle>
            ClickSpace Inc., Calgary, AB - Intern, Full-Stack Support Developer
          </ListTitle>
          <JobDate>January 2022 - February 2022</JobDate>
          <ListParagraph>
            <ul>
              <li>Developed 5+ reusable Flutter widgets for retail screen interfaces, accelerating feature development by 20% and adhering to accessibility compliance.</li>
              <li>Enhanced code quality through thorough Bitbucket code reviews, decreasing bug reports by 10%.</li>
              <li>Built customized menus using Flutter, Dart, HTML, JavaScript, CSS, and Firebase for various retail clients.</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />

      <ListItem>
        <ListContainer>
          <ListTitle>
            Horizon Quest Inc., Fergus, ON - Intern, Web Developer/IT
          </ListTitle>
          <JobDate>October 2021 - December 2022</JobDate>
          <ListParagraph>
            <ul>
              <li>Engineered streamlined website deployment process using WordPress and Shopify, decreasing project completion time by 15% and enabling onboarding of 2 additional clients.</li>
              <li>Optimized SQL queries, accelerating data retrieval speed by 20% and decreasing server downtime by 1 hour monthly.</li>
              <li>Developed marketing and e-commerce websites from scratch for various clients using WordPress, Shopify, HTML, JavaScript, CSS, PHP.</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </ExpSection>
  </Section>
);

export default Experience;
