"use client";
import Link from "next/link";
import "./desktopMenu.scss";
import { useTranslations, useLocale } from "next-intl";

export default function DesktopMenu() {
  const locale = useLocale();
  const t = useTranslations("header.desktopMenu");
  const p = useTranslations("products");

  return (
    <div className="dn lap-db box">
      <ul className="desktopMenu">
        <li>
          <Link href={`/${locale}/`}>{t("home")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/#about`}>{t("about")}</Link>
        </li>
        <li className="category-open">
          <Link href={`/${locale}/#products`}>{t("products")}</Link>
          <div className="category-2">
            <Link href={`/${locale}/${p("mill.url")}`}>{p("mill.title")}</Link>
            <Link href={`/${locale}/${p("feed.url")}`}>{p("feed.title")}</Link>
            <Link href={`/${locale}/${p("auto.url")}`}>{p("auto.title")}</Link>
            <Link href={`/${locale}/${p("glb.url")}`}>{p("glb.title")}</Link>
            <Link href={`/${locale}/${p("seed.url")}`}>{p("seed.title")}</Link>
            <Link href={`/${locale}/${p("ektar.url")}`}>{p("ektar.title")}</Link>
          </div>
        </li>
        <li>
          <Link href={`/${locale}/#partners`}>{t("partners")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/#contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </div>
  );
}
