import React from "react";
import { styled } from "styled-components";
import { personalInfo } from "../data/personalInfo";
import { ButtonPrimary, ButtonSecondary, Container } from "../Styles/StyledComponents";
import Reveal from "./Reveal";

// Placeholder cinematic background. Replace HERO_BACKGROUND_IMAGE with a
// dedicated high-resolution hero shot (or swap the <HeroImage> below for a
// <video autoPlay muted loop playsInline> element) once you have final art.
const HERO_BACKGROUND_IMAGE = `${process.env.PUBLIC_URL}/images/games/Dungeon_Master/Screenshot%202026-07-17%20171048.png`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeroBackdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  filter: brightness(0.55) saturate(0.9);
  transform: scale(1.03);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(10, 10, 11, 0.55) 0%, rgba(10, 10, 11, 0.55) 30%, rgba(10, 10, 11, 0.92) 92%),
    linear-gradient(90deg, rgba(10, 10, 11, 0.85) 0%, rgba(10, 10, 11, 0.35) 55%, rgba(10, 10, 11, 0.6) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 84px;
  max-width: 720px;
`;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 24px;
`;

const HeroName = styled.h1`
  font-size: clamp(2.6rem, 7vw, 5rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.text};
`;

const HeroTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 14px;
`;

const HeroIntro = styled.p`
  margin-top: 28px;
  max-width: 560px;
  font-size: 1.08rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 44px;
`;

const ScrollCue = styled.button`
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textFaint};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const ScrollLine = styled.span`
  width: 1px;
  height: 40px;
  background: currentColor;
  opacity: 0.6;
  animation: scrollPulse 2.2s ease-in-out infinite;

  @keyframes scrollPulse {
    0%,
    100% {
      transform: scaleY(1);
      opacity: 0.3;
    }
    50% {
      transform: scaleY(1);
      opacity: 0.8;
    }
  }
`;

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Hero: React.FC = () => (
  <HeroSection id="home">
    <HeroBackdrop>
      {/* TODO: replace this screenshot with a dedicated cinematic hero image or background video */}
      <HeroImage src={HERO_BACKGROUND_IMAGE} alt="" role="presentation" />
      <HeroOverlay />
    </HeroBackdrop>

    <Container>
      <HeroContent>
        <Reveal>
          <Eyebrow>Game Developer Portfolio</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          {/* TODO: replace with your name */}
          <HeroName>{personalInfo.name}</HeroName>
        </Reveal>
        <Reveal delay={140}>
          {/* TODO: replace with your title, e.g. "Game Developer" */}
          <HeroTitle>{personalInfo.role}</HeroTitle>
        </Reveal>
        <Reveal delay={200}>
          {/* TODO: replace with your own short introduction */}
          <HeroIntro>{personalInfo.intro}</HeroIntro>
        </Reveal>
        <Reveal delay={260}>
          <HeroActions>
            <ButtonPrimary as="button" onClick={() => scrollTo("projects")}>
              View Projects
            </ButtonPrimary>
            <ButtonSecondary as="a" href={personalInfo.resumeUri} target="_blank" rel="noopener noreferrer">
              View Resume
            </ButtonSecondary>
          </HeroActions>
        </Reveal>
      </HeroContent>
    </Container>

    <ScrollCue onClick={() => scrollTo("projects")} data-cursor-hover>
      <span>Scroll</span>
      <ScrollLine />
    </ScrollCue>
  </HeroSection>
);

export default Hero;
