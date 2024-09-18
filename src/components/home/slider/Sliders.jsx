"use client";
import "./sliders.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Slider1 from "/src/assets/home/slider/1.webp";
import Slider2 from "/src/assets/home/slider/2.webp";
import Slider3 from "/src/assets/home/slider/3.webp";
import Slider4 from "/src/assets/home/slider/4.webp";
import Slider5 from "/src/assets/home/slider/5.webp";
import Slider6 from "/src/assets/home/slider/6.webp";

export default function Sliders() {
  const t = useTranslations("sliders");

  var settings = {
    autoplay: true,
    dots: true,
    arrow: false,
    infinite: false,
    speed: 300,
    autoplaySpeed: 7000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true
        }
      },
    ]
  };

  return (
    <div className="sliders">
      <Slider {...settings}>
        <div className="slider bg-1">
          <div className="slider-inner">
            <div className="slider-content">
              <div className="slider-content-title">{t("slider1.title")}</div>
              <div className="slider-content-subtitle">
                {t("slider1.subtitle")}
              </div>
              <Link href="#" className="slider-content-button">
                {t("slider1.button")}
              </Link>
            </div>
            <div className="slider-image">
              <Image width={700} height={700} className="image-center" src={Slider1.src} alt="slider 1" />
            </div>
          </div>
        </div>
        <div className="slider bg-2">
          <div className="slider-inner">
            <div className="slider-content">
              <div className="slider-content-title">{t("slider2.title")}</div>
              <div className="slider-content-subtitle">
                {t("slider2.subtitle")}
              </div>
              <Link href="#" className="slider-content-button">
                {t("slider2.button")}
              </Link>
            </div>
            <div className="slider-image">
              <Image width={700} height={700} className="image-center" src={Slider2.src} alt="slider 2" />
            </div>
          </div>
        </div>
        <div className="slider bg-3">
          <div className="slider-inner">
            <div className="slider-content">
              <div className="slider-content-title">{t("slider3.title")}</div>
              <div className="slider-content-subtitle">
                {t("slider3.subtitle")}
              </div>
              <Link href="#" className="slider-content-button">
                {t("slider3.button")}
              </Link>
            </div>
            <div className="slider-image">
              <Image width={700} height={700} className="image-center" src={Slider3.src} alt="slider 3" />
            </div>
          </div>
        </div>
        <div className="slider bg-4">
          <div className="slider-inner">
            <div className="slider-content">
              <div className="slider-content-title">{t("slider4.title")}</div>
              <div className="slider-content-subtitle">
                {t("slider4.subtitle")}
              </div>
              <Link href="#" className="slider-content-button">
                {t("slider4.button")}
              </Link>
            </div>
            <div className="slider-image">
              <Image width={700} height={700} className="image-center" src={Slider4.src} alt="slider 4" />
            </div>
          </div>
        </div>
        <div className="slider bg-5">
          <div className="slider-inner">
            <div className="slider-content">
              <div className="slider-content-title">{t("slider5.title")}</div>
              <div className="slider-content-subtitle">
                {t("slider5.subtitle")}
              </div>
              <Link href="#" className="slider-content-button">
                {t("slider5.button")}
              </Link>
            </div>
            <div className="slider-image">
              <Image width={700} height={700} className="image-center" src={Slider5.src} alt="slider 5" />
            </div>
          </div>
        </div>
        <div className="slider bg-6">
          <div className="slider-inner">
            <div className="slider-content">
              <div className="slider-content-title">{t("slider6.title")}</div>
              <div className="slider-content-subtitle">
                {t("slider6.subtitle")}
              </div>
              <Link href="#" className="slider-content-button">
                {t("slider6.button")}
              </Link>
            </div>
            <div className="slider-image">
              <Image width={700} height={700} className="image-center" src={Slider6.src} alt="slider 6" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
