import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 2,
      arrows: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="/assets/img1.jpg"/>
          </div>
          <div>
            <img src="/assets/img2.jpg"/>
          </div>
          <div>
            <img src="/assets/img3.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}