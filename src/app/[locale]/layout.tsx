import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const locales = ['en', 'ja'] as const;
type Locale = typeof locales[number];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  
  return {
    title: "Portfolio - Mitsuru Hatano",
    description: "Mitsuru Hatano's Portfolio",
    keywords: ["software engineer", "portfolio", "web development", "react", "next.js", "typescript", "javascript", "fullstack developer"],
    authors: [{ name: "Software Engineer" }, { name: "Mitsuru Hatano" }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: "Portfolio - Mitsuru Hatano",
      description: "Mitsuru Hatano's Portfolio",
      type: "website",
      locale: locale,
      alternateLocale: locale === 'en' ? 'ja' : 'en',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Portfolio - Mitsuru Hatano",
      description: "Mitsuru Hatano's Portfolio",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}