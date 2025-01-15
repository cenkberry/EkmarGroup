"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Logo() {
  const locale = useLocale();

  return (
    <div className="box box-lap-auto">
      <Link href={`/${locale}`}>
        <div className="logo fs-36 col-white">
            Logo
        </div>
      </Link>
    </div>
  );
}
