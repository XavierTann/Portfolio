import { styled } from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 130px 0;

  @media (max-width: 1024px) {
    padding: 96px 0;
  }

  @media (max-width: 768px) {
    padding: 72px 0;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

/** Small uppercase eyebrow label with a project-number prefix and a thin trailing rule. */
export const SectionLabelRow = styled(Row)`
  gap: 16px;
  margin-bottom: 20px;
`;

export const SectionNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.08em;
`;

export const SectionLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const SectionLabelRule = styled.span`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

export const SectionHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${({ theme }) => theme.colors.text};
  max-width: 720px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SectionIntro = styled.p`
  margin-top: 20px;
  max-width: 620px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.05rem;
  line-height: 1.7;
`;

/* ---------------------------------- Buttons --------------------------------- */

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  white-space: nowrap;
`;

export const ButtonPrimary = styled.a`
  ${buttonBase}
  background: ${({ theme }) => theme.colors.accent};
  color: #171310;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.accentStrong};
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const ButtonSecondary = styled.a`
  ${buttonBase}
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const ButtonGhost = styled.a`
  ${buttonBase}
  padding: 10px 4px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

/* ------------------------------- Meta / tags -------------------------------- */

export const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MetaLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textFaint};
`;

export const MetaValue = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  background: ${({ theme }) => theme.colors.accentMuted};
  padding: 6px 12px;
  border-radius: 2px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

/* ------------------------------ Corner brackets ------------------------------ */

export const BracketHost = styled.div`
  position: relative;
`;

const cornerBase = `
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: rgba(237, 234, 227, 0.5);
  opacity: 0.7;
  pointer-events: none;
`;

export const CornerTopLeft = styled.span`
  ${cornerBase}
  top: 10px;
  left: 10px;
  border-top: 2px solid;
  border-left: 2px solid;
`;

export const CornerTopRight = styled.span`
  ${cornerBase}
  top: 10px;
  right: 10px;
  border-top: 2px solid;
  border-right: 2px solid;
`;

export const CornerBottomLeft = styled.span`
  ${cornerBase}
  bottom: 10px;
  left: 10px;
  border-bottom: 2px solid;
  border-left: 2px solid;
`;

export const CornerBottomRight = styled.span`
  ${cornerBase}
  bottom: 10px;
  right: 10px;
  border-bottom: 2px solid;
  border-right: 2px solid;
`;
