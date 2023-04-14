import React, { useEffect, useState } from "react";
import "./VideoPlayer.scss";

export const VideoPlayer = ({
  videoId,
  isPlaying,
  handleEndVideo,
  currentVideoIndex,
}) => {
  // let player = null;
  const [player, setPlayer] = useState();

  useEffect(() => {
    // Crea una instancia de la clase de reproductor de video de la API de reproductor IFrame
    if (!player) {
      let playerInstance = new window.YT.Player(`player-${videoId}`, {
        height: "100%",
        width: "100%",
        host: "https://www.youtube.com",
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 0,
          wmode: "opaque",
          origin: "http://localhost:5173",
        },
        events: {
          onStateChange: onPlayerStateChange,
          onReady: (event) => {
            event.target.playVideo();
            playerInstance.playVideo();
          },
        },
      });

      setPlayer(playerInstance);
      // playerInstance.playVideo();
    } else {
      if (isPlaying) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [videoId, isPlaying]);

  const onPlayerStateChange = (event) => {
    // Evento cuando el estado del reproductor de video cambia [2] indica que el video ha finalizado
    if (event.data === 0) {
      handleEndVideo();
    }
  };

  return <div id={`player-${videoId}`} className="videoPlayer"></div>;
};
