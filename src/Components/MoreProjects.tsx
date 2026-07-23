import React from "react";
import { styled } from "styled-components";
import { moreProjects } from "../data/moreProjects";
import { LinkKind } from "../types";
import { resolveMediaUrl } from "../utils/media";
import Reveal from "./Reveal";
import { Container, Section } from "../Styles/StyledComponents";
import {
  SectionLabel,
  SectionLabelRow,
  SectionLabelRule,
  SectionNumber,
} from "../Styles/StyledComponents";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
  margin-top: 48px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Body = styled.div`
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Name = styled.h4`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Engine = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const SkillsLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textFaint};
  margin-top: 4px;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`;

const SkillChip = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 4px 9px;
  border-radius: 2px;
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: auto;
  padding-top: 12px;
`;

const CardLink = styled.a`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const LINK_TEXT: Record<LinkKind, string> = {
  [LinkKind.GitHub]: "GitHub",
  [LinkKind.ItchIO]: "itch.io",
  [LinkKind.YouTube]: "Watch",
  [LinkKind.Writeup]: "Write-up",
  [LinkKind.Play]: "Play",
};

const MoreProjects: React.FC = () => (
  <Section style={{ paddingTop: 0 }}>
    <Container>
      <Reveal>
        <SectionLabelRow>
          <SectionNumber>—</SectionNumber>
          <SectionLabel>More Projects</SectionLabel>
          <SectionLabelRule />
        </SectionLabelRow>
      </Reveal>

      <Grid>
        {moreProjects.map((project) => (
          <Reveal key={project.name}>
            <Card>
              <ImageWrapper>
                <Thumb src={resolveMediaUrl(project.image.source)} alt={`${project.name} thumbnail`} />
              </ImageWrapper>
              <Body>
                <Engine>{project.engine}</Engine>
                <Name>{project.name}</Name>
                <Description>{project.description}</Description>
                {project.skillsLearnt.length > 0 && (
                  <>
                    <SkillsLabel>Skills Learnt</SkillsLabel>
                    <SkillsRow>
                      {project.skillsLearnt.map((skill) => (
                        <SkillChip key={skill}>{skill}</SkillChip>
                      ))}
                    </SkillsRow>
                  </>
                )}
                {project.links.length > 0 && (
                  <LinkRow>
                    {project.links.map((link) => (
                      <CardLink key={link.kind} href={link.url} target="_blank" rel="noopener noreferrer">
                        {LINK_TEXT[link.kind]}
                      </CardLink>
                    ))}
                  </LinkRow>
                )}
              </Body>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default MoreProjects;
