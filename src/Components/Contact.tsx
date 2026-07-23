import React from "react";
import { styled } from "styled-components";
import { personalInfo } from "../data/personalInfo";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ButtonPrimary, Container, Section } from "../Styles/StyledComponents";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 64px;
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 26px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBorder};
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateY(-3px);
  }
`;

const CardLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textFaint};
`;

const CardValue = styled.span`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.text};
  overflow-wrap: break-word;
`;

const ResumeRow = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const ResumeNote = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
`;

const Contact: React.FC = () => (
  <Section id="contact">
    <Container>
      <SectionHeader
        number="05"
        label="Contact"
        heading="Let's talk about a role"
        intro="Open to game developer roles and collaborations. The fastest way to reach me is by email."
      />

      <Grid>
        <Reveal>
          <ContactCard href={`mailto:${personalInfo.email}`}>
            <CardLabel>Email</CardLabel>
            <CardValue>
              {/* <wbr> gives the browser a sensible break point instead of splitting mid-word */}
              {personalInfo.email.split("@")[0]}@<wbr />
              {personalInfo.email.split("@")[1]}
            </CardValue>
          </ContactCard>
        </Reveal>
        <Reveal delay={60}>
          <ContactCard href={personalInfo.links.linkedIn} target="_blank" rel="noopener noreferrer">
            <CardLabel>LinkedIn</CardLabel>
            <CardValue>Connect on LinkedIn</CardValue>
          </ContactCard>
        </Reveal>
        <Reveal delay={120}>
          <ContactCard href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">
            <CardLabel>GitHub</CardLabel>
            <CardValue>View my repositories</CardValue>
          </ContactCard>
        </Reveal>
        <Reveal delay={180}>
          <ContactCard href={personalInfo.links.itchIO} target="_blank" rel="noopener noreferrer">
            <CardLabel>itch.io</CardLabel>
            <CardValue>Play my games</CardValue>
          </ContactCard>
        </Reveal>
      </Grid>

      <Reveal delay={220}>
        <ResumeRow>
          <ButtonPrimary as="a" href={personalInfo.resumeUri} download>
            Download Resume
          </ButtonPrimary>
          <ResumeNote>PDF, updated resume - opens in a new tab if download is blocked.</ResumeNote>
        </ResumeRow>
      </Reveal>
    </Container>
  </Section>
);

export default Contact;
