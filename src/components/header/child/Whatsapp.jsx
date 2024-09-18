import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import WhatsappIcon from "/src/assets/header/whatsapp.png";

export default function Whatsapp() {
  const t = useTranslations("header.contact.whatsapp");
  return (
    <Link className="whatsapp-btn" href="https://wa.me/77017338500">
      <Image src={WhatsappIcon.src}  width="24" height="24" alt="whatsapp" unoptimized />
      <div>{t("title")}</div>
    </Link>
  );
}
