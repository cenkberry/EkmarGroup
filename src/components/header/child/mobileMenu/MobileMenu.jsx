"use client";
import "./mobileMenu.scss";
import { useTranslations, useLocale } from "next-intl";
import React, { useState } from 'react';
import Link from "next/link";
import HamburgerIcon from "/src/assets/header/hamburger.svg";
import CloseIcon from "/src/assets/header/close.svg";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations("header.desktopMenu");
  const locale = useLocale();  // Mevcut dili al

  const toggleMenu = () => {
    setIsActive((isActive) => !isActive);
    document.querySelector("body").classList.toggle("overlay-active");
  };

  return (
    <div className="lap-dn">
      <div className="df aic jce">
        <HamburgerIcon onClick={toggleMenu} />
        {isActive && (
          <div className="mobileMenu">
            <div className="df aic jce">
              <CloseIcon onClick={toggleMenu} />
            </div>
            <ul>
              <li>
                <Link onClick={toggleMenu} href={`/${locale}`}>{t("home")}</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href={`/${locale}/#about`}>{t("about")}</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href={`/${locale}/#products`}>{t("products")}</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href={`/${locale}/#partners`}>{t("partners")}</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href={`/${locale}/#contact`}>{t("contact")}</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
