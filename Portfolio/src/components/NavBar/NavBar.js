import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, LIST } from './NavBarStyles';

const NavBar = () => (
  <Container>
    <Div2>
      <LIST>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </LIST>
      <li>
        <Link href="#exp">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    
  </Container>
);

export default NavBar;