import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { MediaItem } from "../types";
import { resolveMediaUrl } from "../utils/media";

interface MediaGalleryProps {
  items: MediaItem[];
}

const Main = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  cursor: zoom-in;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.p`
  margin-top: 14px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textFaint};
`;

const ThumbRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  overflow-x: auto;
  padding-bottom: 4px;
`;

const Thumb = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  width: 96px;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radius.sm};
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.border)};
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};
  transition: opacity 0.25s ease, border-color 0.25s ease;

  &:hover {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 900;
  background: rgba(6, 6, 7, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: zoom-out;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  if (items.length === 0) return null;
  const active = items[activeIndex];

  return (
    <div>
      <Main onClick={() => setLightboxOpen(true)}>
        <MainImage src={resolveMediaUrl(active.source)} alt={active.caption || "Project screenshot"} />
      </Main>
      {active.caption && <Caption>{active.caption}</Caption>}

      {items.length > 1 && (
        <ThumbRow>
          {items.map((item, index) => (
            <Thumb key={item.source} $active={index === activeIndex} onClick={() => setActiveIndex(index)}>
              <img src={resolveMediaUrl(item.source)} alt="" />
            </Thumb>
          ))}
        </ThumbRow>
      )}

      {lightboxOpen && (
        <Lightbox onClick={() => setLightboxOpen(false)}>
          <LightboxImage src={resolveMediaUrl(active.source)} alt={active.caption || "Project screenshot enlarged"} />
        </Lightbox>
      )}
    </div>
  );
};

export default MediaGallery;
