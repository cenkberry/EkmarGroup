import "./products.scss";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  const locale = useLocale();
  const t = useTranslations("products");

  return (
    <div id="products" className="home-products">
      <div className="container">
        <div className="home-products-title">{t("title")}</div>
        <div className="home-products-subtitle">{t("subtitle")}</div>
        <div className="row">
          <div className="box-12 box-lap-6 mb-24">
            <Link href={`/${locale}/${t("mill.url")}`} className="home-products-card">
              <div className="image-center home-products-card-image">
                <Image
                  loading="lazy"
                  src={t("mill.image")}
                  alt={t("mill.title")}
                  width={690}
                  height={345}
                  unoptimized
                />
              </div>
              <div className="home-products-card-title">
                <p>{t("mill.title")}</p>
              </div>
            </Link>
          </div>
          <div className="box-12 box-lap-6 mb-24">
            <Link href={`/${locale}/${t("feed.url")}`} className="home-products-card">
              <div className="image-center home-products-card-image">
                <Image
                  loading="lazy"
                  src={t("feed.image")}
                  alt={t("feed.title")}
                  width={690}
                  height={345}
                  unoptimized
                />
              </div>
              <div className="home-products-card-title">
                <p>{t("feed.title")}</p>
              </div>
            </Link>
          </div>
          <div className="box-12 box-lap-6 mb-24">
            <Link href={`/${locale}/${t("auto.url")}`} className="home-products-card">
              <div className="image-center home-products-card-image">
                <Image
                  loading="lazy"
                  src={t("auto.image")}
                  alt={t("auto.title")}
                  width={690}
                  height={345}
                  unoptimized
                />
              </div>
              <div className="home-products-card-title">
                <p>{t("auto.title")}</p>
              </div>
            </Link>
          </div>
          <div className="box-12 box-lap-6 mb-24">
            <Link href={`/${locale}/${t("glb.url")}`} className="home-products-card">
              <div className="image-center home-products-card-image">
                <Image
                  loading="lazy"
                  src={t("glb.image")}
                  alt={t("glb.title")}
                  width={690}
                  height={345}
                  unoptimized
                />
              </div>
              <div className="home-products-card-title">
                <p>{t("glb.title")}</p>
              </div>
            </Link>
          </div>
          <div className="box-12 box-lap-6 mb-24">
            <Link href={`/${locale}/${t("seed.url")}`} className="home-products-card">
              <div className="image-center home-products-card-image">
                <Image
                  loading="lazy"
                  src={t("seed.image")}
                  alt={t("seed.title")}
                  width={690}
                  height={345}
                  unoptimized
                />
              </div>
              <div className="home-products-card-title">
                <p>{t("seed.title")}</p>
              </div>
            </Link>
          </div>
          <div className="box-12 box-lap-6 mb-24">
            <Link href={`/${locale}/${t("ektar.url")}`} className="home-products-card">
              <div className="image-center home-products-card-image">
                <Image
                  loading="lazy"
                  src={t("ektar.image")}
                  alt={t("ektar.title")}
                  width={690}
                  height={345}
                  unoptimized
                />
              </div>
              <div className="home-products-card-title">
                <p>{t("ektar.title")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
