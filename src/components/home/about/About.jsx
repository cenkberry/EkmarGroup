import "./about.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AboutImage from "/src/assets/home/about/about.webp";
import Icon1 from "/src/assets/home/about/1.svg";
import Icon2 from "/src/assets/home/about/2.svg";
import Icon3 from "/src/assets/home/about/3.svg";
import Icon4 from "/src/assets/home/about/4.svg";

export default function About() {
  const t = useTranslations("about");

  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-title">{t("title")}</div>
        <div className="about-subtitle">{t("subtitle")}</div>
      </div>
      <div className="container">
        <div className="row aic">
          <div className="box-lap-7 box-desk-6">
            <div className="about-image">
              <Image
                loading="lazy"
                unoptimized
                width={700}
                height={500}
                className="image-center rad-12"
                src={AboutImage.src}
                alt="about image"
              />
            </div>
          </div>
          <div className="box-lap-5 box-desk-6">
            <div className="about-content">
              <div className="content">
                <div className="content-title">
                  <Icon1 />
                  <div>{t("expertManufacturer.title")}</div>
                </div>
                <div className="content-subtitle">
                  {t("expertManufacturer.subtitle")}
                </div>
              </div>
              <div className="content">
                <div className="content-title">
                  <Icon2 />
                  <div>{t("twentyYearsExperience.title")}</div>
                </div>
                <div className="content-subtitle">
                  {t("twentyYearsExperience.subtitle")}
                </div>
              </div>
              <div className="content">
                <div className="content-title">
                  <Icon3 />
                  <div>{t("reliablePartner.title")}</div>
                </div>
                <div className="content-subtitle">
                  {t("reliablePartner.subtitle")}
                </div>
              </div>
              <div className="content">
                <div className="content-title">
                  <Icon4 />
                  <div>{t("leadershipGoal.title")}</div>
                </div>
                <div className="content-subtitle">
                  {t("leadershipGoal.subtitle")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
