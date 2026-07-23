import React from "react";
import {
  SectionHeading,
  SectionIntro,
  SectionLabel,
  SectionLabelRow,
  SectionLabelRule,
  SectionNumber,
} from "../Styles/StyledComponents";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  number: string;
  label: string;
  heading: string;
  intro?: string;
}

/** The repeated "01 — LABEL ──── Heading / intro" block used at the top of every section. */
const SectionHeader: React.FC<SectionHeaderProps> = ({ number, label, heading, intro }) => (
  <Reveal>
    <SectionLabelRow>
      <SectionNumber>{number}</SectionNumber>
      <SectionLabel>{label}</SectionLabel>
      <SectionLabelRule />
    </SectionLabelRow>
    <SectionHeading>{heading}</SectionHeading>
    {intro && <SectionIntro>{intro}</SectionIntro>}
  </Reveal>
);

export default SectionHeader;
