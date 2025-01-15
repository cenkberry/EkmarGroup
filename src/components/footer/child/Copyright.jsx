import { useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("footer.copyright");
  return (
    <div className="copyright-side">
      <div className="container">
      <div className="copyright">
        <div>{t("copy1")}</div>
        <div className="dn lap-db">{t("copy2")}</div>
      </div>
    </div>
    </div>
  );
}