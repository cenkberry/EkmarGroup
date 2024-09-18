import { useTranslations , useLocale } from "next-intl";
import Link from "next/link";
import PhoneIcon from "/src/assets/footer/phone.svg";
import MailIcon from "/src/assets/footer/mail.svg";
import AddressIcon from "/src/assets/footer/address.svg";

export default function FooterBar() {
  const locale = useLocale();
  const t = useTranslations("footer.address");
  const p = useTranslations("products");
  
  return (
    <div className="footer-bar">
      <div className="container">
        <div className="row">
          
        <div className="box-lap-3">
            <div className="footer-links">
              <div>
                {p("title")}
              </div>
              <ul>
                <li>
                  <Link href={`/${locale}/${p("mill.url")}`}>{p("mill.title")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/${p("feed.url")}`}>{p("feed.title")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/${p("auto.url")}`}>{p("auto.title")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/${p("glb.url")}`}>{p("glb.title")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/${p("seed.url")}`}>{p("seed.title")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/${p("ektar.url")}`}>{p("ektar.title")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-lap-3">
            <div className="firm-detail">
              <div className="firm-detail-item title">
                <div>{t("turkey.country")}</div>
              </div>
              <div className="firm-detail-item">
                <PhoneIcon />
                <Link href={`tel:${t("turkey.phone")}`}>
                  {t("turkey.phoneTitle")}
                </Link>
              </div>
              <div className="firm-detail-item">
                <MailIcon />
                <Link href={`mailto:${t("turkey.email")}`}>
                  {t("turkey.email")}
                </Link>
              </div>
              <div className="firm-detail-item">
                <AddressIcon />
                <div>{t("turkey.address")}</div>
              </div>
            </div>
          </div>
          <div className="box-lap-3">
            <div className="firm-detail">
              <div className="firm-detail-item title">
                <div>{t("kazakhstan.country")}</div>
              </div>
              <div className="firm-detail-item">
                <PhoneIcon />
                <Link href={`tel:${t("kazakhstan.phone")}`}>
                  {t("kazakhstan.phoneTitle")}
                </Link>
              </div>
              <div className="firm-detail-item">
                <MailIcon />
                <Link href={`mailto:${t("kazakhstan.email")}`}>
                  {t("kazakhstan.email")}
                </Link>
              </div>
              <div className="firm-detail-item">
                <AddressIcon />
                <div>{t("kazakhstan.address")}</div>
              </div>
            </div>
          </div>
          <div className="box-lap-3">
            <div className="firm-detail">
              <div className="firm-detail-item title">
                <div>{t("uzbekistan.country")}</div>
              </div>
              <div className="firm-detail-item">
                <PhoneIcon />
                <Link href={`tel:${t("uzbekistan.phone")}`}>
                  {t("uzbekistan.phoneTitle")}
                </Link>
              </div>
              <div className="firm-detail-item">
                <MailIcon />
                <Link href={`mailto:${t("uzbekistan.email")}`}>
                  {t("uzbekistan.email")}
                </Link>
              </div>
              <div className="firm-detail-item">
                <AddressIcon />
                <div>{t("uzbekistan.address")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
