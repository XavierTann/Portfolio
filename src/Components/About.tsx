import React from "react";
import { styled } from "styled-components";
import { personalInfo } from "../data/personalInfo";
import CornerFrame from "./CornerFrame";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { BracketHost, Container, Section } from "../Styles/StyledComponents";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 72px;
  margin-top: 64px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const PortraitFrame = styled(BracketHost)`
  aspect-ratio: 4 / 5;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  span {
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    max-width: 320px;
  }
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Bio = styled.p`
  font-size: 1.08rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 62ch;
  white-space: pre-line;
`;

const About: React.FC = () => (
  <Section id="about">
    <Container>
      <SectionHeader number="03" label="About" heading="Who I am" />
      <Layout>
        <Reveal>
          <PortraitFrame>
            {/* TODO: replace with a real portrait photo */}
            <Portrait src={personalInfo.image} alt={personalInfo.name} />
            <CornerFrame />
          </PortraitFrame>
        </Reveal>
        <Reveal delay={100}>
          {/* TODO: replace with your own biography */}
          <Bio>{personalInfo.bio}</Bio>
        </Reveal>
      </Layout>
    </Container>
  </Section>
);

export default About;
