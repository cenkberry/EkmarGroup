import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("feedMillPage");

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
            <div>{t("palletizingGroup.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product1.image")}
                    alt={t("palletizingGroup.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product2.image")}
                    alt={t("palletizingGroup.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product3.image")}
                    alt={t("palletizingGroup.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product4.image")}
                    alt={t("palletizingGroup.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product5.image")}
                    alt={t("palletizingGroup.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product5.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product6.image")}
                    alt={t("palletizingGroup.product6.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product6.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product7.image")}
                    alt={t("palletizingGroup.product7.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product7.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product8.image")}
                    alt={t("palletizingGroup.product8.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product8.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product9.image")}
                    alt={t("palletizingGroup.product9.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product9.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("palletizingGroup.product10.image")}
                    alt={t("palletizingGroup.product10.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("palletizingGroup.product10.title")}
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <div>{t("millingAndMixingGroup.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingAndMixingGroup.product1.image")}
                    alt={t("millingAndMixingGroup.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingAndMixingGroup.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingAndMixingGroup.product2.image")}
                    alt={t("millingAndMixingGroup.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingAndMixingGroup.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingAndMixingGroup.product3.image")}
                    alt={t("millingAndMixingGroup.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingAndMixingGroup.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingAndMixingGroup.product4.image")}
                    alt={t("millingAndMixingGroup.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingAndMixingGroup.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingAndMixingGroup.product5.image")}
                    alt={t("millingAndMixingGroup.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingAndMixingGroup.product5.title")}
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <div>{t("screeningGroup.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product1.image")}
                    alt={t("screeningGroup.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product2.image")}
                    alt={t("screeningGroup.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product3.image")}
                    alt={t("screeningGroup.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product4.image")}
                    alt={t("screeningGroup.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product5.image")}
                    alt={t("screeningGroup.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product5.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product6.image")}
                    alt={t("screeningGroup.product6.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product6.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product7.image")}
                    alt={t("screeningGroup.product7.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product7.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product8.image")}
                    alt={t("screeningGroup.product8.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product8.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("screeningGroup.product9.image")}
                    alt={t("screeningGroup.product9.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("screeningGroup.product9.title")}
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <div>{t("transportationEquipment.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product1.image")}
                    alt={t("transportationEquipment.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product2.image")}
                    alt={t("transportationEquipment.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product3.image")}
                    alt={t("transportationEquipment.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product4.image")}
                    alt={t("transportationEquipment.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product5.image")}
                    alt={t("transportationEquipment.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product5.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product6.image")}
                    alt={t("transportationEquipment.product6.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product6.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product7.image")}
                    alt={t("transportationEquipment.product7.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product7.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product8.image")}
                    alt={t("transportationEquipment.product8.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product8.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("transportationEquipment.product9.image")}
                    alt={t("transportationEquipment.product9.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("transportationEquipment.product9.title")}
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <div>{t("packingAndLoadingGroup.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("packingAndLoadingGroup.product1.image")}
                    alt={t("packingAndLoadingGroup.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("packingAndLoadingGroup.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("packingAndLoadingGroup.product2.image")}
                    alt={t("packingAndLoadingGroup.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("packingAndLoadingGroup.product2.title")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}