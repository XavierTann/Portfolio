import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FeaturedProject, LinkKind } from "../types";
import { findLink, toYouTubeWatchUrl } from "../utils/links";
import CornerFrame from "./CornerFrame";
import Reveal from "./Reveal";
import {
  BracketHost,
  ButtonGhost,
  ButtonPrimary,
  ButtonSecondary,
  MetaGrid,
  MetaItem,
  MetaLabel,
  MetaValue,
  StatusPill,
} from "../Styles/StyledComponents";

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const Card = styled.article<{ $reverse: boolean }>`
  display: flex;
  align-items: center;
  gap: 64px;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const ImageWrapper = styled(BracketHost)`
  flex: 1.15;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.card};

  span {
    opacity: 0;
    transition: opacity 0.35s ease;
  }
`;

const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
`;

const ImageNumber = styled.span`
  position: absolute;
  bottom: 14px;
  left: 18px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.35;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  pointer-events: none;
`;

const CardHoverArea = styled.div`
  &:hover ${ProjectImage} {
    transform: scale(1.05);
  }

  &:hover ${ImageWrapper} span {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Title = styled.h3`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: ${({ theme }) => theme.colors.text};
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.7;
  max-width: 46ch;
`;

const ToolsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ToolChip = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 5px 10px;
  border-radius: 2px;
`;

const SkillChip = styled(ToolChip)`
  color: ${({ theme }) => theme.colors.accent};
  border-color: ${({ theme }) => theme.colors.accentBorder};
`;

const SkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 6px;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index } ) => {
  const gameplayUrl = findLink(project.links, [LinkKind.YouTube]);
  const playUrl = findLink(project.links, [LinkKind.ItchIO, LinkKind.Play]);
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal>
      <CardHoverArea>
        <Card $reverse={index % 2 === 1}>
          <ImageWrapper>
            <ImageInner>
              <ProjectImage
                src={`${process.env.PUBLIC_URL}${project.cardImage.source}`}
                alt={project.cardImage.caption || `${project.name} gameplay screenshot`}
              />
              <ImageNumber>{number}</ImageNumber>
            </ImageInner>
            <CornerFrame />
          </ImageWrapper>

          <Content>
            <StatusPill>{project.status}</StatusPill>
            <Title>{project.name}</Title>
            <Tagline>{project.tagline}</Tagline>

            <MetaGrid>
              <MetaItem>
                <MetaLabel>Role</MetaLabel>
                <MetaValue>{project.role}</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Engine</MetaLabel>
                <MetaValue>{project.engine}</MetaValue>
              </MetaItem>
            </MetaGrid>

            <ToolsRow>
              {project.tools.map((tool) => (
                <ToolChip key={tool}>{tool}</ToolChip>
              ))}
            </ToolsRow>

            {project.skillsLearnt.length > 0 && (
              <SkillsBlock>
                <MetaLabel>Skills Learnt</MetaLabel>
                <ToolsRow>
                  {project.skillsLearnt.map((skill) => (
                    <SkillChip key={skill}>{skill}</SkillChip>
                  ))}
                </ToolsRow>
              </SkillsBlock>
            )}

            <ButtonRow>
              <ButtonPrimary as={Link} to={`/project/${project.slug}`}>
                View Project
              </ButtonPrimary>
              {gameplayUrl && (
                <ButtonSecondary as="a" href={toYouTubeWatchUrl(gameplayUrl)} target="_blank" rel="noopener noreferrer">
                  Watch Gameplay
                </ButtonSecondary>
              )}
              {playUrl && (
                <ButtonGhost as="a" href={playUrl} target="_blank" rel="noopener noreferrer">
                  Play Build ↗
                </ButtonGhost>
              )}
            </ButtonRow>
          </Content>
        </Card>
      </CardHoverArea>
    </Reveal>
  );
};

export default ProjectCard;
