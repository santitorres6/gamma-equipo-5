import React, { useRef, useState } from "react";
import { Carousel } from "../../atoms/Carousel/Carousel";
import { VideoPlayer } from "../../atoms/VideoPlayer/VideoPlayer";
import { useNavigate } from "react-router-dom";
import "./VideosCarousel.scss";
import { Button } from "../../atoms/Button/Button";

export const VideosCarousel = ({ videos, button }) => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const sliderRef = useRef();

  const handleEndVideo = () => {
    sliderRef.current.slickNext();
  };

  const beforeChangeSlider = (current, next) => {
    setCurrentVideoIndex(next);
  };

  const handleClick = (href) => {
    navigate(href);
  };

  return (
    <section className="carouselVideos">
      <Carousel
        autoplay={false}
        sliderRef={sliderRef}
        beforeChangeSlider={beforeChangeSlider}
      >
        {videos.map((video, index) => {
          return (
            <VideoPlayer
              key={video.id}
              videoId={video.src.slice(30)}
              // currentVideoIndex={index}
              handleEndVideo={handleEndVideo}
              isPlaying={index === currentVideoIndex}
            />
          );
        })}
      </Carousel>
      <Button
        title={button.title}
        handleClick={() => handleClick(button.href)}
      />
    </section>
  );
};
