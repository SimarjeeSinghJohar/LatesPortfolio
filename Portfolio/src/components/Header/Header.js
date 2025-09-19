import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, LIST } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "10px" }}>
        <DiCssdeck size="5rem" color="#FAED26" /> <Span>My Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <LIST>
        <Link href="#tech">
          <NavLink>TECHONOLOGIES</NavLink>
        </Link>
      </LIST>
      <LIST>
        <Link href="#exp">
          <NavLink>EXPERIENCE</NavLink>
        </Link>
      </LIST>
      <LIST>
        <Link href="#projects">
          <NavLink>PROJECTS</NavLink>
        </Link>
      </LIST>
      <LIST>
        <Link href="#about">
          <NavLink>ABOUT</NavLink>
        </Link>
      </LIST>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/">
        <AiFillGithub size={"3rem"} />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/">
        <AiFillLinkedin size={"3rem"} />
      </SocialIcons>
      <SocialIcons href="https://github.com/">
        <AiFillInstagram size={"3rem"} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;