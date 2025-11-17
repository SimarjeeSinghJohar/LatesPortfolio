import React from 'react';
import { DiAtlassian, DiDatabase, DiFirebase, DiGithub, DiJava, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechSection } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech' style={{ zIndex: 600, position: 'relative' }}>
  <TechSection>
    <SectionDivider />

    <SectionTitle>
      Technologies
    </SectionTitle>
  <SectionText>
    I have worked on range of technologies in in web development world. 
    From Back-end to Design.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" color='yellow'/>
      <ListContainer>
        <ListTitle>
          Front-End
        </ListTitle>
        <ListParagraph>
          Experience with React JS, Flutter, Bootstrap, HTML5, JQuery, CSS3 , RESTful API, RESTful web services , Ajax, JSON
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiJava  size="3rem" color='yellow'/>
      <ListContainer>
        <ListTitle>
          Back-End
        </ListTitle>
        <ListParagraph>
        Experience with Dart, JavaScript, Java/J2EE, C++, PHP, Embedded C,  Knowledge of Design Patterns, Spring Spring Boot, Node.js, Express.js, Hibernate, JPA  </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiGithub size="3rem" color='yellow'/>
      <ListContainer>
        <ListTitle>Version Control</ListTitle>
        <ListParagraph>
        Experience with Git, GitHub, GitHub Desktop, Bitbucket, SourceTree  </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiAtlassian size="3rem" color='yellow'/>
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
        Experience with  Jira, WordPress, Shopify, Envision, Maghub, Top tracker, Confluence, HelpDesk, Clickspace.tv, Atlassian  </ListParagraph>
      </ListContainer>
    </ListItem>


    <ListItem>
      <DiDatabase size="3rem" color='yellow'/>
      <ListContainer>
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
        Experience with MySQL, PostgreSQL, Firebase, MongoDB Compass and Atlas, phpMyAdmin, SQL, No-SQL, Digital Ocean and Host Papa </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiVisualstudio size="3rem" color='yellow'/>
      <ListContainer>
        <ListTitle>IDE</ListTitle>
        <ListParagraph>
        Experience with Visual Studio Code, XCode, Android Studio, Postman, Advance Rest Client, IntelliJ, NetBeans, Tinker cad, Visual Studio, SQL Management Studio</ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </TechSection>
</Section>
);

export default Technologies;
