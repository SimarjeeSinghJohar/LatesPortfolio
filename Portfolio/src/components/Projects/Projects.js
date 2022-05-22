import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemonstartion = [
  { Title: '', Description: '' },
  { Title: '', Description: '' },
  { Title: '', Description: '' },
  { Title: '', Description: '' }
];

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
        {projects.map((project) => (
          <BlogCard key={project.id}>
            <Img  src={project.image} />
            <TitleContent>
              <HeaderThree title>
                {project.title}
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <br/>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, i)=>(
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks
                href={project.visit}>Code Repo</ExternalLinks>
            </UtilityList>
          </BlogCard>
          
        ))}
  </Section>
);

export default Projects;