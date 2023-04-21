import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "../../atoms/Carousel/Carousel";
import { VideoPlayer } from "../../atoms/VideoPlayer/VideoPlayer";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import "./VideosCarousel.scss";

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
    <motion.section
      className="carouselVideos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
              videoId={video.src}
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
    </motion.section>
  );
};
