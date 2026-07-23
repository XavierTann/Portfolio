import React from "react";
import { styled } from "styled-components";
import { personalInfo } from "../data/personalInfo";
import LogoButton from "./LogoButton";
import { Container, Divider, Row } from "../Styles/StyledComponents";

const FooterWrap = styled.footer`
  padding: 32px 0 48px;
`;

const FooterInner = styled(Row)`
  justify-content: space-between;
  padding-top: 28px;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copy = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textFaint};
`;

const IconRow = styled(Row)`
  gap: 4px;
`;

const Footer: React.FC = () => (
  <FooterWrap>
    <Container>
      <Divider />
      <FooterInner>
        <Copy>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </Copy>
        <IconRow>
          <LogoButton source="/images/logos/github.png" size={30} margin={6} linkTo={personalInfo.links.github} />
          <LogoButton source="/images/logos/linkedIn.png" size={30} margin={6} linkTo={personalInfo.links.linkedIn} />
          <LogoButton source="/images/logos/itch.io.png" size={30} margin={6} linkTo={personalInfo.links.itchIO} />
        </IconRow>
      </FooterInner>
    </Container>
  </FooterWrap>
);

export default Footer;
