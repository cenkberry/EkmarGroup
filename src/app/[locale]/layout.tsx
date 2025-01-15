import React from "react";
import "/src/app/global.css";
import type { Metadata } from "next";
import { Comme } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const font = Comme({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: "Private Firm",
  description: "Private Firm Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${font.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
