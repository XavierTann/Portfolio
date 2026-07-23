import React from "react";
import { styled } from "styled-components";
import { MediaItem } from "../types";

interface VideoEmbedProps {
  video: MediaItem;
  title: string;
}

const Frame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

/** Responsive 16:9 YouTube embed. Swap `video.source` for your own gameplay video link. */
const VideoEmbed: React.FC<VideoEmbedProps> = ({ video, title }) => (
  <Frame>
    <iframe
      src={video.source}
      title={`${title} gameplay video`}
      loading="lazy"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Frame>
);

export default VideoEmbed;
