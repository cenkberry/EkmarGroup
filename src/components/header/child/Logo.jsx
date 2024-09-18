"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "/src/assets/header/logo.png";

export default function Logo() {
  const locale = useLocale();

  return (
    <div className="box box-lap-auto">
      <Link href={`/${locale}`}>
        <Image src={LogoImage} alt="logo" unoptimized />
      </Link>
    </div>
  );
}
