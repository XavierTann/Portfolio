import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useScrolled } from "../hooks/useScrolled";
import { personalInfo } from "../data/personalInfo";
import { Container, Row } from "../Styles/StyledComponents";

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Internships" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Bar = styled.header<{ $solid: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  background: ${({ $solid, theme }) => ($solid ? theme.colors.bg + "f0" : "transparent")};
  border-bottom: 1px solid ${({ $solid, theme }) => ($solid ? theme.colors.border : "transparent")};
  backdrop-filter: ${({ $solid }) => ($solid ? "blur(10px)" : "none")};
  transition: background 0.35s ease, border-color 0.35s ease;
`;

const BarInner = styled(Row)`
  justify-content: space-between;
  height: 84px;

  @media (max-width: 768px) {
    height: 68px;
  }
`;

const Monogram = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.text};
  padding: 0;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 26px;

  @media (max-width: 980px) {
    display: none;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 0;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  border-bottom: 1px solid transparent;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ResumeLink = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  padding: 10px 18px;
  border-radius: 2px;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentMuted};
  }
`;

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;

  span {
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 980px) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 980px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    gap: 2px;
    padding: 8px 20px 24px;
    background: ${({ theme }) => theme.colors.bg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    /* Fully occlude the page content below so the menu reads as a modal
       overlay rather than a dropdown that content can bleed through. */
    min-height: ${({ $open }) => ($open ? "calc(100vh - 68px)" : "auto")};
  }
`;

const MobileNavButton = styled(NavButton)`
  text-align: left;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const Navbar: React.FC = () => {
  const scrolled = useScrolled(24);
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const goToSection = (id: string) => {
    setMobileOpen(false);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <Bar $solid={scrolled || mobileOpen}>
      <Container>
        <BarInner>
          <Monogram onClick={() => goToSection("home")} aria-label="Scroll to top">
            {personalInfo.name.split(" ").map((part) => part[0]).join("")}
            <span>.</span>
          </Monogram>

          <NavLinks>
            {NAV_SECTIONS.map((section) => (
              <NavButton key={section.id} onClick={() => goToSection(section.id)}>
                {section.label}
              </NavButton>
            ))}
            <ResumeLink href={personalInfo.resumeUri} target="_blank" rel="noopener noreferrer">
              Resume
            </ResumeLink>
          </NavLinks>

          <MobileToggle
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </MobileToggle>
        </BarInner>
      </Container>

      <MobileMenu $open={mobileOpen}>
        {NAV_SECTIONS.map((section) => (
          <MobileNavButton key={section.id} onClick={() => goToSection(section.id)}>
            {section.label}
          </MobileNavButton>
        ))}
        <MobileNavButton
          as="a"
          href={personalInfo.resumeUri}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </MobileNavButton>
      </MobileMenu>
    </Bar>
  );
};

export default Navbar;
