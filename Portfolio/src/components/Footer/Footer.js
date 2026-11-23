import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>EMAIL</LinkTitle>
    <LinkItem href="mailto:"></LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>LINKEDIN</LinkTitle>
    <LinkItem href="" target="_blank" rel="noopener noreferrer"></LinkItem>
    </LinkColumn>
    </LinkList>
  </FooterWrapper>
  );
};

export default Footer;
