import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function EmbedYouTube({ id, title }: { id: string; title: string }) {
  return (
    <div>
      <LiteYouTubeEmbed id={id} title={title} poster="maxresdefault" />
    </div>
  );
}

export default EmbedYouTube;
