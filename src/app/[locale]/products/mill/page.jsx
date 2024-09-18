import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("millPage");

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
            <div>{t("millingSection.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product1.image")}
                    alt={t("millingSection.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product2.image")}
                    alt={t("millingSection.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product3.image")}
                    alt={t("millingSection.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product4.image")}
                    alt={t("millingSection.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product5.image")}
                    alt={t("millingSection.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product5.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product6.image")}
                    alt={t("millingSection.product6.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product6.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product7.image")}
                    alt={t("millingSection.product7.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product7.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product8.image")}
                    alt={t("millingSection.product8.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product8.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product9.image")}
                    alt={t("millingSection.product9.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product9.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product10.image")}
                    alt={t("millingSection.product10.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product10.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product11.image")}
                    alt={t("millingSection.product11.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product11.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("millingSection.product12.image")}
                    alt={t("millingSection.product12.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("millingSection.product12.title")}
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <div>{t("cleaningSection.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product1.image")}
                    alt={t("cleaningSection.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product2.image")}
                    alt={t("cleaningSection.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product3.image")}
                    alt={t("cleaningSection.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product4.image")}
                    alt={t("cleaningSection.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product5.image")}
                    alt={t("cleaningSection.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product5.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product6.image")}
                    alt={t("cleaningSection.product6.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product6.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product7.image")}
                    alt={t("cleaningSection.product7.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product7.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product8.image")}
                    alt={t("cleaningSection.product8.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product8.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product9.image")}
                    alt={t("cleaningSection.product9.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product9.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product10.image")}
                    alt={t("cleaningSection.product10.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product10.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product11.image")}
                    alt={t("cleaningSection.product11.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product11.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("cleaningSection.product12.image")}
                    alt={t("cleaningSection.product12.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("cleaningSection.product12.title")}
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <div>{t("TransportationEquipment.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("TransportationEquipment.product1.image")}
                    alt={t("TransportationEquipment.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("TransportationEquipment.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("TransportationEquipment.product2.image")}
                    alt={t("TransportationEquipment.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("TransportationEquipment.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("TransportationEquipment.product3.image")}
                    alt={t("TransportationEquipment.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("TransportationEquipment.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("TransportationEquipment.product4.image")}
                    alt={t("TransportationEquipment.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("TransportationEquipment.product4.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("TransportationEquipment.product5.image")}
                    alt={t("TransportationEquipment.product5.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("TransportationEquipment.product5.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("TransportationEquipment.product6.image")}
                    alt={t("TransportationEquipment.product6.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("TransportationEquipment.product6.title")}
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <div>{t("packingSection.title")}</div>
          </div>
          <div className="row">
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("packingSection.product1.image")}
                    alt={t("packingSection.product1.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("packingSection.product1.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("packingSection.product2.image")}
                    alt={t("packingSection.product2.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("packingSection.product2.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("packingSection.product3.image")}
                    alt={t("packingSection.product3.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("packingSection.product3.title")}
                </div>
              </div>
            </div>
            <div className="box-6 box-lap-3">
              <div className="product-card">
                <div className="image-center product-card-image">
                  <Image
                    loading="lazy"
                    src={t("packingSection.product4.image")}
                    alt={t("packingSection.product4.title")}
                    width={350}
                    height={350}
                    unoptimized
                  />
                </div>
                <div className="product-card-title">
                  {t("packingSection.product4.title")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
