import { useEffect, useRef } from "react";

export const getYouTubeId = (url) => {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
};

const VideoCard = ({ video, isUnmuted, onToggleMute, showTitle = true }) => {
  const ytId = getYouTubeId(video.src);
  const isYouTube = !!ytId;
  const iframeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isYouTube) {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      const cmd = isUnmuted ? "unMute" : "mute";
      win.postMessage(
        JSON.stringify({ event: "command", func: cmd, args: [] }),
        "*"
      );
    } else if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
      const p = videoRef.current.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [isUnmuted, isYouTube]);

  const ytSrc = isYouTube
    ? `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&enablejsapi=1`
    : null;

  return (
    <li>
      <div className="list_inner">
        <div className={`image ${isUnmuted ? "unmuted" : ""}`}>
          <div className="player_wrap">
            {isYouTube ? (
              <iframe
                ref={iframeRef}
                src={ytSrc}
                title={video.title}
                style={{ border: 0 }}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                controls
                controlsList="nodownload"
                preload="auto"
              />
            )}
          </div>
          <button
            type="button"
            className="mute_indicator"
            onClick={onToggleMute}
            aria-label={isUnmuted ? "Mute video" : "Unmute video"}
          >
            {isUnmuted ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
            <span>{isUnmuted ? "Mute" : "Tap to unmute"}</span>
          </button>
        </div>
        {showTitle && (
          <div className="details">
            <h3 className="title">{video.title}</h3>
          </div>
        )}
      </div>
    </li>
  );
};

export default VideoCard;
