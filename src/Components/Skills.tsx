import React from "react";
import { styled } from "styled-components";
import { skillCategories } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Container, Section } from "../Styles/StyledComponents";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 48px;
  margin-top: 64px;
`;

const CategoryTitle = styled.h4`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SkillList = styled.ul`
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: "";
    width: 8px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`;

const Skills: React.FC = () => (
  <Section id="skills">
    <Container>
      <SectionHeader number="04" label="Skills" heading="Tools I build with" />
      <Grid>
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 60}>
            <div>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillList>
                {category.skills.map((skill) => (
                  <SkillItem key={skill}>{skill}</SkillItem>
                ))}
              </SkillList>
            </div>
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Skills;
