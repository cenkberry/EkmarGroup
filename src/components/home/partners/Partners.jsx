"use client";
import React from "react";
import Slider from "react-slick";
import "./partners.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Partner1 from "/src/assets/home/partners/1.webp";
import Partner2 from "/src/assets/home/partners/2.webp";
import Partner3 from "/src/assets/home/partners/3.webp";
import Partner4 from "/src/assets/home/partners/4.webp";
import Partner5 from "/src/assets/home/partners/5.webp";
import Partner6 from "/src/assets/home/partners/6.webp";
import Partner7 from "/src/assets/home/partners/7.webp";
import Partner8 from "/src/assets/home/partners/8.webp";

export default function Partners() {
  const t = useTranslations("partners");

  const settings = {
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 0,
    speed: 500,
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div id="partners" className="partners">
      <div className="container">
        <div className="partners-title">{t("title")}</div>
        <div className="partners-subtitle">{t("subtitle")}</div>
        <Slider {...settings}>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner1.src}
                width={150}
                height={120}
                alt="partner 1"
              />
            </div>
          </div>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner2.src}
                width={150}
                height={120}
                alt="partner 2"
              />
            </div>
          </div>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner3.src}
                width={150}
                height={120}
                alt="partner 3"
              />
            </div>
          </div>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner4.src}
                width={150}
                height={120}
                alt="partner 4"
              />
            </div>
          </div>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner5.src}
                width={150}
                height={120}
                alt="partner 5"
              />
            </div>
          </div>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner6.src}
                width={150}
                height={120}
                alt="partner 6"
              />
            </div>
          </div>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner7.src}
                width={150}
                height={120}
                alt="partner 7"
              />
            </div>
          </div>
          <div className="partners-slider-item">
            <div className="image-center">
              <Image
                src={Partner8.src}
                width={150}
                height={120}
                alt="partner 8"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
