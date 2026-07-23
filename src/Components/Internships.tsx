import React from "react";
import { styled } from "styled-components";
import { internships } from "../data/internships";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Container, Divider, Section } from "../Styles/StyledComponents";

const List = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
`;

const Entry = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 40px;
  padding: 36px 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 28px 0;
  }
`;

const CompanyCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Company = styled.h4`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Period = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const ToolsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`;

const ToolChip = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 4px 9px;
  border-radius: 2px;
`;

const Role = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

const HighlightList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HighlightItem = styled.li`
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;

  &::before {
    content: "";
    width: 8px;
    height: 1px;
    margin-top: 12px;
    background: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`;

const Internships: React.FC = () => (
  <Section id="internships" style={{ paddingTop: 0 }}>
    <Container>
      <SectionHeader
        number="02"
        label="Experience"
        heading="Internships"
        intro="Professional experience alongside my personal projects and game jams."
      />
      <List>
        {internships.map((internship, index) => (
          <React.Fragment key={internship.company}>
            {index > 0 && <Divider />}
            <Reveal delay={index * 60}>
              <Entry>
                <CompanyCol>
                  <Company>{internship.company}</Company>
                  {internship.period && <Period>{internship.period}</Period>}
                  <ToolsRow>
                    {internship.tools.map((tool) => (
                      <ToolChip key={tool}>{tool}</ToolChip>
                    ))}
                  </ToolsRow>
                </CompanyCol>
                <div>
                  <Role>{internship.role}</Role>
                  <HighlightList>
                    {internship.highlights.map((highlight) => (
                      <HighlightItem key={highlight}>{highlight}</HighlightItem>
                    ))}
                  </HighlightList>
                </div>
              </Entry>
            </Reveal>
          </React.Fragment>
        ))}
      </List>
    </Container>
  </Section>
);

export default Internships;
