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
    <LinkItem href="mailto:simarjitjohar319@gmail.com">simarjitjohar319@gmail.com</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>LINKEDIN</LinkTitle>
    <LinkItem href="https://linkedin.com/in/simarjeet-singh-johar" target="_blank" rel="noopener noreferrer">linkedin.com/in/simarjeet-singh-johar</LinkItem>
    </LinkColumn>
    </LinkList>
  </FooterWrapper>
  );
};

export default Footer;
