import "./offers.scss";
import { useTranslations } from "next-intl";
import Icon1 from "/src/assets/home/offers/1.svg";
import Icon2 from "/src/assets/home/offers/2.svg";
import Icon3 from "/src/assets/home/offers/3.svg";
import Icon4 from "/src/assets/home/offers/4.svg";
import Icon5 from "/src/assets/home/offers/5.svg";
import Icon6 from "/src/assets/home/offers/6.svg";

export default function Offers() {
  const t = useTranslations("offers");

  return (
    <div className="offers">
      <div className="container">
        <div className="offers-title">{t("title")}</div>
        <div className="offers-subtitle">{t("subtitle")}</div>
        <div className="offer-wrapper">
          <div className="offer">
            <Icon1 />
            <div className="offer-title">{t("determiningNeeds.title")}</div>
            <div className="offer-subtitle">
              {t("determiningNeeds.subtitle")}
            </div>
          </div>
          <div className="offer">
            <Icon2 />
            <div className="offer-title">{t("design.title")}</div>
            <div className="offer-subtitle">{t("design.subtitle")}</div>
          </div>
          <div className="offer">
            <Icon3 />
            <div className="offer-title">{t("createInfrastructure.title")}</div>
            <div className="offer-subtitle">
              {t("createInfrastructure.subtitle")}
            </div>
          </div>
          <div className="offer">
            <Icon4 />
            <div className="offer-title">
              {t("controlAndSupervision.title")}
            </div>
            <div className="offer-subtitle">
              {t("controlAndSupervision.subtitle")}
            </div>
          </div>
          <div className="offer">
            <Icon5 />
            <div className="offer-title">{t("maintenance.title")}</div>
            <div className="offer-subtitle">{t("maintenance.subtitle")}</div>
          </div>
          <div className="offer">
            <Icon6 />
            <div className="offer-title">{t("postWarrantyService.title")}</div>
            <div className="offer-subtitle">
              {t("postWarrantyService.subtitle")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
