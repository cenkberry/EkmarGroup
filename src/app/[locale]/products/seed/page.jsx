import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("seedPage");

  return (
    <div className="product-page">
      <div
        style={{ backgroundImage: `url(${t("topImage")})` }}
        className="product-page-top"
      >
        <div className="product-page-top-title">{t("topTitle")}</div>
      </div>
      <div className="container">
        <div className="product-page-wrapper">
          <div className="title">
            <div>{t("products.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product1.image")}
                    alt={t("products.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product2.image")}
                    alt={t("products.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product3.image")}
                    alt={t("products.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product4.image")}
                    alt={t("products.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product5.image")}
                    alt={t("products.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product5.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product6.image")}
                    alt={t("products.product6.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product6.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product7.image")}
                    alt={t("products.product7.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product7.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product8.image")}
                    alt={t("products.product8.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product8.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product9.image")}
                    alt={t("products.product9.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product9.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product10.image")}
                    alt={t("products.product10.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product10.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product11.image")}
                    alt={t("products.product11.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product11.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product12.image")}
                    alt={t("products.product12.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product12.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("products.product13.image")}
                    alt={t("products.product13.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("products.product13.title")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}