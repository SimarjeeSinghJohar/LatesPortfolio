import React, { useState, useMemo } from 'react';

import { 
  BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, 
  TitleContent, UtilityList, Img, ProjectSection, FilterContainer, FilterButton, 
  SearchBar, SearchIcon, SortContainer, SortButton, ControlsWrapper
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags)];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply tag filter
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
      );
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply sorting
    if (sortBy === 'name-asc') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'name-desc') {
      filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    }

    return filtered;
  }, [activeFilter, searchQuery, sortBy]);

  return (
    <Section nopadding id='projects' style={{ zIndex: 600, position: 'relative' }}>
      <ProjectSection>
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        
        <ControlsWrapper className="animate-on-scroll">
          {/* Search Bar */}
          <SearchBar>
            <SearchIcon>🔍</SearchIcon>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
          </SearchBar>

          {/* Filter Buttons */}
          <FilterContainer>
            {allTags.map((tag) => (
              <FilterButton
                key={tag}
                active={activeFilter === tag}
                onClick={() => setActiveFilter(tag)}
                aria-pressed={activeFilter === tag}
              >
                {tag}
              </FilterButton>
            ))}
          </FilterContainer>

          {/* Sort Options */}
          <SortContainer>
            <SortButton 
              active={sortBy === 'default'}
              onClick={() => setSortBy('default')}
            >
              Default
            </SortButton>
            <SortButton 
              active={sortBy === 'name-asc'}
              onClick={() => setSortBy('name-asc')}
            >
              A-Z ↑
            </SortButton>
            <SortButton 
              active={sortBy === 'name-desc'}
              onClick={() => setSortBy('name-desc')}
            >
              Z-A ↓
            </SortButton>
          </SortContainer>
        </ControlsWrapper>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <BlogCard 
              key={project.id} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Img src={project.image} alt={project.title} />
              <TitleContent>
                <HeaderThree $isTitle>
                  {project.title}
                </HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{project.description}</CardInfo>
              <br/>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code Repo
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '18px'
          }}>
            No projects found matching your criteria. Try adjusting your filters.
          </div>
        )}
      </ProjectSection>
    </Section>
  );
};

export default Projects;