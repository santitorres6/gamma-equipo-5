import React, { useEffect } from "react";
import "./VideoPlayer.scss";

export const VideoPlayer = ({ videoId, currentVideoIndex, handleEndVideo }) => {
  let player = null;

  useEffect(() => {
    // Crea una instancia de la clase de reproductor de video de la API de reproductor IFrame
    player = new window.YT.Player(`player-${currentVideoIndex}`, {
      height: "100%",
      width: "100%",
      host: "https://www.youtube.com",
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        mute: 0,
        wmode: "opaque",
        origin: "http://localhost:5173",
      },
      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    return () => {
      // Liberar los recursos del reproductor de video
      player.destroy();
    };
  }, [currentVideoIndex]);

  const onPlayerStateChange = (event) => {
    // Evento cuando el estado del reproductor de video cambia [2] indica que el video ha finalizado
    if (event.data === 0) {
      handleEndVideo();
    }
  };

  return <div id={`player-${currentVideoIndex}`} className="videoPlayer"></div>;
};
