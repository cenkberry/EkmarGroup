import React from "react";
import "/src/app/global.css";
import type { Metadata } from "next";
import { Lunasima } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const rochester = Lunasima({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: "Ekmar Group",
  description: "Ekmar Group Website",
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
      <body className={`${rochester.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
