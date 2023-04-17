import React, { useRef, useState } from "react";
import { Carousel } from "../../atoms/Carousel/Carousel";
import { VideoPlayer } from "../../atoms/VideoPlayer/VideoPlayer";
import { useNavigate } from "react-router-dom";
import "./VideosCarousel.scss";
import { Button } from "../../atoms/Button/Button";

const INITIAL_SLIDE = 0;

export const VideosCarousel = ({ videos, button }) => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(INITIAL_SLIDE);
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
        initialSlide={INITIAL_SLIDE}
      >
        {videos.map((video, index) => {
          return (
            <VideoPlayer
              key={video.id}
              videoId={video.src.slice(30)}
              handleEndVideo={handleEndVideo}
              isPlaying={index === currentVideoIndex}
              currentVideoIndex={currentVideoIndex}
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
