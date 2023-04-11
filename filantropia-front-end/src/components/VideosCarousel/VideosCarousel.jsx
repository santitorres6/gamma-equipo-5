import React, { useRef, useState } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./VideosCarousel.scss";

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

  const handleOnClick = (href) => {
    navigate(href);
  };

  return (
    <section className="carouselVideos">
      <Carousel
        autoplay={false}
        sliderRef={sliderRef}
        beforeChangeSlider={beforeChangeSlider}
      >
        {videos.map((video) => {
          return (
            <VideoPlayer
              key={video.id}
              videoId={video.src.slice(30)}
              currentVideoIndex={currentVideoIndex}
              handleEndVideo={handleEndVideo}
            />
          );
        })}
      </Carousel>
      <Button
        title={button.title}
        handleOnClick={() => handleOnClick(button.href)}
      />
    </section>
  );
};
