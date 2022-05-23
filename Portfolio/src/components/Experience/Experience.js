import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ExperienceStyles';

const Experience = () => (
  <Section id='exp'>
    <SectionDivider />
    <SectionTitle>
      Experience
    </SectionTitle>
    <List>

      <ListItem>
        <ListContainer>
          <ListTitle>
            ClickSpace Inc. Al, QC -
            Support Full-Stack Developer
          </ListTitle>
          January 2022- February 2022
          <ListParagraph>
            <ul>
              <li> - Member of Support Development and Maintenance Team for application development.</li>
              <li> - Handled several repositories every day, including live projects. Maintenance, Updates, and Support on different types of customized built Menus displayed on TV screens in retail stores. Deployment of updates through a customized tool ‘Clickspace.tv’. Also, handled several different  tasks, instead of just reviewing the job related tasks.</li>
              <li> - Full-Stack Development of Menus using Flutter, Dart, Html, JavaScript, CSS, and Firebase as the database for various clients as per the requirements.</li>
              <li> - Used Bitbucket to maintain the repositories with the use of GIT. Created Pull requests to get the code and design changes reviewed by Senior Developer and participated in code reviews/design discussions as well.</li>
              <li> - Used HelpDesk tool for Ticketing, Confluence and Jira for Documentation.</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />

      <ListItem>
        <ListContainer>
          <ListTitle>
            Horizon Quest Inc. Fergus, ON -
            Web Developer/IT
          </ListTitle>
          October 2021 - January 2021

          <ListParagraph>
            <ul>
              <li> - Member of Marketing Website Operations team for Web Applications. </li>
              <li> - Designed Wireframes using different tools including Draw.io, Adobe, Wix, and Envision. Maintenance, updates, and support for various clients’ websites. </li>
              <li> - Developed marketing, e-commerce websites from scratch using WordPress, Shopify, Wix, Web.com, Html, JavaScript, CSS, PHP for various rural and urban web clients as per the requirements. SQL related activities such as use of phpMyAdmin and similar databases.</li>
              <li> - As a part of DevOps teams, assisted in buying domains and hosting websites through ‘godaddy’, ‘host papa’, and ‘digital ocean’. Also launched a Live Portal.</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />



      <ListItem>
        <ListContainer>
          <ListTitle>
            RedGrape Technologies Private Limited -
            Embedded C Intern

          </ListTitle>
          July 2019 - Oct 2019

          <ListParagraph>
            <ul>
              <li> - Received training on usage of microcontrollers, Sensors, and Embedded C language to make an embedded system work. </li>
              <li> - IOT and Embedded Systems development. </li>
              <li> - Worked with microcontrollers and integrated Arduino with sensors like photoresistors and mini-LCD to make a blueprint of traffic lights system and display timing.</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />


      <ListItem>
        <ListContainer>
          <ListTitle>
            iLampion Digital Marketing Agency -
            Front-End Developer
          </ListTitle>
          August 2018 – May 2019  
          <ListParagraph>
            <ul>
              <li> - Worked as a part of the Website Development Operations team. </li>
              <li> - Maintained and updated the agency website as per the market requirements and the addition of services. </li>
              <li> - Followed Agile methodologies and participated in Analysis, Design and Development, Testing, and Implementation of Web Applications.</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Experience;
