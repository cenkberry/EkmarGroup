"use client";
import "./slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function SliderComp() {
  const locale = useLocale();
  const t = useTranslations("sliders");
  const p = useTranslations("products");

  var settings = {
    autoplay: true,
    dots: true,
    arrow: false,
    infinite: false,
    speed: 300,
    autoplaySpeed: 7000,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false
  };

  return (
    <div className="sliders">
      <Slider {...settings}>
        <div className="slider">
          <div
            style={{ backgroundImage: `url("/image/sliders/1.webp")` }}
            className="bg"
          >
            <div className="container">
              <div className="slider-content">
                <div className="slider-content-title">{t("slider1.title")}</div>
                <div className="slider-content-subtitle">
                  {t("slider1.subtitle")}
                </div>
                <Link
                  href={`/${locale}/${p("feed.url")}`}
                  className="slider-content-button"
                >
                  {t("slider1.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div
            style={{ backgroundImage: `url("/image/sliders/2.webp")` }}
            className="bg"
          >
            <div className="container">
              <div className="slider-content">
                <div className="slider-content-title">{t("slider2.title")}</div>
                <div className="slider-content-subtitle">
                  {t("slider2.subtitle")}
                </div>
                <Link
                  href={`/${locale}/${p("mill.url")}`}
                  className="slider-content-button"
                >
                  {t("slider2.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div
            style={{ backgroundImage: `url("/image/sliders/3.webp")` }}
            className="bg"
          >
            <div className="container">
              <div className="slider-content">
                <div className="slider-content-title">{t("slider3.title")}</div>
                <div className="slider-content-subtitle">
                  {t("slider3.subtitle")}
                </div>
                <Link
                  href={`/${locale}/${p("auto.url")}`}
                  className="slider-content-button"
                >
                  {t("slider3.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div
            style={{ backgroundImage: `url("/image/sliders/4.webp")` }}
            className="bg"
          >
            <div className="container">
              <div className="slider-content">
                <div className="slider-content-title">{t("slider4.title")}</div>
                <div className="slider-content-subtitle">
                  {t("slider4.subtitle")}
                </div>
                <Link
                  href={`/${locale}/${p("glb.url")}`}
                  className="slider-content-button"
                >
                  {t("slider4.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div
            style={{ backgroundImage: `url("/image/sliders/5.webp")` }}
            className="bg"
          >
            <div className="container">
              <div className="slider-content">
                <div className="slider-content-title">{t("slider5.title")}</div>
                <div className="slider-content-subtitle">
                  {t("slider5.subtitle")}
                </div>
                <Link
                  href={`/${locale}/${p("seed.url")}`}
                  className="slider-content-button"
                >
                  {t("slider5.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div
            style={{ backgroundImage: `url("/image/sliders/6.webp")` }}
            className="bg"
          >
            <div className="container">
              <div className="slider-content">
                <div className="slider-content-title">{t("slider6.title")}</div>
                <div className="slider-content-subtitle">
                  {t("slider6.subtitle")}
                </div>
                <Link
                  href={`/${locale}/${p("ektar.url")}`}
                  className="slider-content-button"
                >
                  {t("slider6.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
