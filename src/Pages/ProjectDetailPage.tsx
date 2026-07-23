import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import CornerFrame from "../Components/CornerFrame";
import MediaGallery from "../Components/MediaGallery";
import Reveal from "../Components/Reveal";
import VideoEmbed from "../Components/VideoEmbed";
import { featuredProjects } from "../data/projects";
import {
  BracketHost,
  ButtonGhost,
  ButtonPrimary,
  ButtonSecondary,
  Container,
  Divider,
  MetaGrid,
  MetaItem,
  MetaLabel,
  MetaValue,
  Section,
  StatusPill,
} from "../Styles/StyledComponents";
import { LinkKind } from "../types";
import { findLink, toYouTubeWatchUrl } from "../utils/links";
import { resolveMediaUrl } from "../utils/media";

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const HeroImageFrame = styled(BracketHost)`
  margin-top: 32px;
  aspect-ratio: 21 / 9;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.card};

  @media (max-width: 768px) {
    aspect-ratio: 16 / 10;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 28px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.2rem);
  color: ${({ theme }) => theme.colors.text};
`;

const Tagline = styled.p`
  margin-top: 18px;
  max-width: 70ch;
  font-size: 1.1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ToolsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
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
  margin-top: 24px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin-top: 90px;

  @media (max-width: 768px) {
    gap: 64px;
    margin-top: 56px;
  }
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 48px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const BlockLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const BlockContent = styled.div`
  max-width: 72ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.02rem;
  line-height: 1.8;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textMuted};

  &::before {
    content: "";
    width: 8px;
    height: 1px;
    margin-top: 12px;
    background: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`;

const SystemCard = styled.div`
  padding: 22px 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
`;

const SystemTitle = styled.h4`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const ChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 28px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const ChallengeLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textFaint};
`;

const ChallengeText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
`;

const SolutionText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const stack = { display: "flex", flexDirection: "column" as const, gap: 20 };

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = featuredProjects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const backToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "projects" } });
  };

  if (!project) {
    return (
      <Section>
        <Container>
          <p>Project not found.</p>
          <BackLink to="/">← Back home</BackLink>
        </Container>
      </Section>
    );
  }

  const { caseStudy } = project;
  const gameplayUrl = findLink(project.links, [LinkKind.YouTube]);
  const playUrl = findLink(project.links, [LinkKind.ItchIO, LinkKind.Play]);
  const writeupUrl = findLink(project.links, [LinkKind.GitHub, LinkKind.Writeup]);

  return (
    <Section style={{ paddingTop: 140 }}>
      <Container>
        <Reveal>
          <BackLink to="/" onClick={backToProjects}>
            ← Back to projects
          </BackLink>
        </Reveal>

        <Reveal delay={60}>
          <HeroImageFrame>
            <HeroImage src={resolveMediaUrl(project.cardImage.source)} alt={`${project.name} key art`} />
            <CornerFrame />
          </HeroImageFrame>
        </Reveal>

        <Reveal delay={100}>
          <TitleRow>
            <StatusPill>{project.status}</StatusPill>
          </TitleRow>
          <Title>{project.name}</Title>
          <Tagline>{project.tagline}</Tagline>

          <MetaGrid style={{ marginTop: 32, maxWidth: 480 }}>
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
              <ToolsRow style={{ marginTop: 0 }}>
                {project.skillsLearnt.map((skill) => (
                  <SkillChip key={skill}>{skill}</SkillChip>
                ))}
              </ToolsRow>
            </SkillsBlock>
          )}

          <ButtonRow>
            {writeupUrl && (
              <ButtonPrimary as="a" href={writeupUrl} target="_blank" rel="noopener noreferrer">
                View Source
              </ButtonPrimary>
            )}
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
        </Reveal>

        <Body>
          <Reveal>
            <Block>
              <BlockLabel>Overview</BlockLabel>
              <BlockContent>{caseStudy.overview}</BlockContent>
            </Block>
          </Reveal>

          <Reveal>
            <Block>
              <BlockLabel>My Responsibilities</BlockLabel>
              <List>
                {caseStudy.responsibilities.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Block>
          </Reveal>

          <Reveal>
            <Block>
              <BlockLabel>Core Gameplay</BlockLabel>
              <BlockContent>{caseStudy.coreGameplay}</BlockContent>
            </Block>
          </Reveal>

          <Reveal>
            <Block>
              <BlockLabel>Key Systems I Built</BlockLabel>
              <div style={stack}>
                {caseStudy.keySystems.map((system) => (
                  <SystemCard key={system.title}>
                    <SystemTitle>{system.title}</SystemTitle>
                    <SolutionText>{system.description}</SolutionText>
                  </SystemCard>
                ))}
              </div>
            </Block>
          </Reveal>

          <Reveal>
            <Block>
              <BlockLabel>Technical Challenges</BlockLabel>
              <div style={stack}>
                {caseStudy.challenges.map((item) => (
                  <ChallengeCard key={item.challenge}>
                    <div>
                      <ChallengeLabel>Challenge</ChallengeLabel>
                      <ChallengeText>{item.challenge}</ChallengeText>
                    </div>
                    <div>
                      <ChallengeLabel>How I solved it</ChallengeLabel>
                      <SolutionText>{item.solution}</SolutionText>
                    </div>
                  </ChallengeCard>
                ))}
              </div>
            </Block>
          </Reveal>

          {caseStudy.gallery.length > 0 && (
            <Reveal>
              <Block>
                <BlockLabel>Screenshots</BlockLabel>
                <MediaGallery items={caseStudy.gallery} />
              </Block>
            </Reveal>
          )}

          {caseStudy.video && (
            <Reveal>
              <Block>
                <BlockLabel>Gameplay Video</BlockLabel>
                <VideoEmbed video={caseStudy.video} title={project.name} />
              </Block>
            </Reveal>
          )}

          <Reveal>
            <Block>
              <BlockLabel>What I Learned</BlockLabel>
              <List>
                {caseStudy.learnings.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Block>
          </Reveal>
        </Body>

        <Divider style={{ margin: "80px 0 40px" }} />

        <Reveal>
          <ButtonRow>
            {writeupUrl && (
              <ButtonSecondary as="a" href={writeupUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </ButtonSecondary>
            )}
            {playUrl && (
              <ButtonSecondary as="a" href={playUrl} target="_blank" rel="noopener noreferrer">
                itch.io
              </ButtonSecondary>
            )}
            {gameplayUrl && (
              <ButtonSecondary as="a" href={toYouTubeWatchUrl(gameplayUrl)} target="_blank" rel="noopener noreferrer">
                YouTube
              </ButtonSecondary>
            )}
            <BackLink to="/" onClick={backToProjects} style={{ marginLeft: "auto" }}>
              ← Back to all projects
            </BackLink>
          </ButtonRow>
        </Reveal>
      </Container>
    </Section>
  );
};

export default ProjectDetailPage;
