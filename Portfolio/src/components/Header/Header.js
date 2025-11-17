import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';

import { Container, Div1, Div2, Div3, Div5, NavLink, SocialIcons, CoinContainer,CoinInner,CoinFace,CoinBack, LIST, Div4, P, BgWrapper } from './HeaderStyles';

import React, { useState } from 'react';

const Header = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Container>
      <Div4>
        <Div1>
          <BgAnimation/>
          <CoinContainer onClick={() => setFlipped(f => !f)}>
            <CoinInner flipped={flipped}>
              <CoinFace src="/images/2A8A0475.JPG" alt="Profile" flipped={flipped} />
              <CoinBack>
                {/* Put your animation, emoji, or SVG here */}
                🎉
              </CoinBack>
            </CoinInner>
          </CoinContainer>
          <P>Simarjeet Singh Johar <br />
            <span style={{ fontSize: '0.9rem', color: '#e0e0e0', fontWeight: 400 }}>
              Software Developer| Cloud-Native | AZ-Certified | SAFE@6 Agile Pactioner
            </span>
          </P>
        </Div1>
      </Div4>

      <Div2>
        <LIST>
          <Link href="#tech">
            <NavLink>SKILLS</NavLink>
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
      <Div5>  </Div5>
    </Container>
  );
};

export default Header;