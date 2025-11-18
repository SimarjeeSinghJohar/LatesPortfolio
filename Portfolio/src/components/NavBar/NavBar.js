import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, LIST } from './NavBarStyles';

const NavBar = () => (
  <Container>
    <Div2>
      <LIST>
        <NavLink href="#tech">Technologies</NavLink>
      </LIST>
      <li>
        <NavLink href="#exp">Experience</NavLink>
      </li>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    
  </Container>
);

export default NavBar;