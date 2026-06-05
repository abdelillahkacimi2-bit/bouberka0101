interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  startTime?: number;
}

export default function YouTubeEmbed({ videoId, title = 'فيديو تعليمي', startTime = 0 }: YouTubeEmbedProps) {
  const src = `https://www.youtube.com/embed/${videoId}${startTime ? `?start=${startTime}` : ''}`;

  return (
    <div className="video-container" style={{
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
    }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 0 }}
      />
    </div>
  );
}
