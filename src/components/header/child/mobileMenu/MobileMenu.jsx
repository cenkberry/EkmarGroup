"use client";
import "./mobileMenu.scss";
import { useTranslations, useLocale } from "next-intl";
import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations("header.desktopMenu");
  const locale = useLocale();

  const handleClick = () => {
    document.querySelector("body").classList.toggle("overlay-active");
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="lap-dn">
      <Hamburger toggled={isOpen} toggle={handleClick} color="#ffffff" />
      <div className={`mobileMenu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link onClick={handleClick} href={`/${locale}`}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={`/${locale}/#about`}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={`/${locale}/#products`}>
              {t("products")}
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={`/${locale}/#partners`}>
              {t("partners")}
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={`/${locale}/#contact`}>
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
