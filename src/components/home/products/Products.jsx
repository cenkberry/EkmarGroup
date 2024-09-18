import "./products.scss";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  const locale = useLocale();
  const t = useTranslations("products");

  return (
    <div id="products" className="products">
      <div className="container">
        <div className="products-title">{t("title")}</div>
        <div className="products-subtitle">{t("subtitle")}</div>
        <div className="row">
          <div className="box-6 box-tab-4">
            <Link href={`/${locale}/${t("mill.url")}`} className="product-card">
              <div className="image-center product-card-image">
                <Image
                  loading="lazy"
                  src={t("mill.image")}
                  alt={t("mill.title")}
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
              <div className="product-card-title">{t("mill.title")}</div>
            </Link>
          </div>
          <div className="box-6 box-tab-4">
            <Link href={`/${locale}/${t("feed.url")}`} className="product-card">
              <div className="image-center product-card-image">
                <Image
                  loading="lazy"
                  src={t("feed.image")}
                  alt={t("feed.title")}
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
              <div className="product-card-title">{t("feed.title")}</div>
            </Link>
          </div>
          <div className="box-6 box-tab-4">
            <Link href={`/${locale}/${t("auto.url")}`} className="product-card">
              <div className="image-center product-card-image">
                <Image
                  loading="lazy"
                  src={t("auto.image")}
                  alt={t("auto.title")}
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
              <div className="product-card-title">{t("auto.title")}</div>
            </Link>
          </div>
          <div className="box-6 box-tab-4">
            <Link href={`/${locale}/${t("glb.url")}`} className="product-card">
              <div className="image-center product-card-image">
                <Image
                  loading="lazy"
                  src={t("glb.image")}
                  alt={t("glb.title")}
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
              <div className="product-card-title">{t("glb.title")}</div>
            </Link>
          </div>
          <div className="box-6 box-tab-4">
            <Link href={`/${locale}/${t("seed.url")}`} className="product-card">
              <div className="image-center product-card-image">
                <Image
                  loading="lazy"
                  src={t("seed.image")}
                  alt={t("seed.title")}
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
              <div className="product-card-title">{t("seed.title")}</div>
            </Link>
          </div>
          <div className="box-6 box-tab-4">
            <Link
              href={`/${locale}/${t("ektar.url")}`}
              className="product-card"
            >
              <div className="image-center product-card-image">
                <Image
                  loading="lazy"
                  src={t("ektar.image")}
                  alt={t("ektar.title")}
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
              <div className="product-card-title">{t("ektar.title")}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
