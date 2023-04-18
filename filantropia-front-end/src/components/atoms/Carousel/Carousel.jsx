import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faAngleLeft}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faAngleRight}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export const Carousel = (props) => {
  const {
    children,
    autoplay = true,
    sliderRef,
    beforeChangeSlider,
    initialSlide=0
  } = props;
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    lazyLoad: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "prueba",
    autoplay: autoplay,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: beforeChangeSlider,
    initialSlide,
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {children}
    </Slider>
  );
};
