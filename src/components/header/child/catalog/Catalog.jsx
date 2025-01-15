"use client";
import "./catalog.scss";
import { useTranslations } from "next-intl";
import CatalogIcon from "/src/assets/header/catalog.svg";

export default function Catalog() {
  const t = useTranslations("header");
  return (
    <div className="box-6 box-lap-auto order-2 order-lap-3">
      <div className="df aic jce ml-18">
        <a
          href="/"
          className="catalog"
        >
          <CatalogIcon />
          <div>{t("catalog")}</div>
        </a>
      </div>
    </div>
  );
}
