import React from 'react';
import Head from 'next/head';
import './globals.css';
import {NextIntlClientProvider,  useMessages} from 'next-intl';
import Footer from '@/components/Footer/index';
import {useLocale} from "next-intl";
import {notFound} from "next/navigation";
import Navbar from "@/components/Navbar";
import LanguageSwitcher from "@/components/Navbar/LanguageSwitcher";
import LocaleSwitcher from "@/components/Navbar/LanguageSwitcher";

export const metadata = {
    title: 'NexusPC - Ведущий Провайдер Инновационных IT-решений',
    description: 'NexusPC — ваш надежный партнер в мире цифровых технологий. Мы предоставляем превосходные IT-услуги, охватывающие разработку веб-сайтов, высокотехнологичные телеграм боты, интеграцию с Мой Склад, Авито, современные системы товаров на Озон, а также интеллектуальные программы лояльности для ваших магазинов.',
    keywords: 'NexusPC, ИТ-услуги, разработка веб-сайтов, телеграм боты, подключение Мой Склад, Авитолог, интеграция товаров, системы лояльности, магазины, разработка ПО',
    author: 'NexusPC',
    ogTitle: 'NexusPC - Ваш Партнер в Мире IT-Решений',
    ogDescription: 'С нами ваш бизнес вступает в эру передовых технологий. Мы не просто предоставляем услуги, мы создаем инновационные решения, определяя будущее цифрового прогресса.',
    ogImage: './public/logo.svg',
    ogUrl: 'https://www.nexuspc.ru',
}

export default function RootLayout({children, params}: {
    children: React.ReactNode
    params: { locale: string };
}) {

    const locale = useLocale();

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }
    const messages = useMessages();

    return (
        <html lang={params.locale}>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            {/* Общие метатеги */}
            <title>{metadata.title}</title>
            <link rel="icon" type="image/x-icon" href="./public/favicon.ico"/>
            <link rel="icon" type="image/png" sizes="16x16" href="./public/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="48x48" href="./public/favicon-48x48.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="./public/android-chrome-192x192.png"/>
            <link rel="icon" type="image/png" sizes="512x512" href="./public/android-chrome-512x512.png"/>
            <link
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="apple-touch-icon" sizes="180x180" href="./public/apple-touch-icon.png"/>

            <meta name="description" content={metadata.description}/>
            <meta name="keywords" content={metadata.keywords}/>
            <meta name="author" content={metadata.author}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            {/* Метатеги для Open Graph (ограничиваются социальными сетями) */}
            <meta property="og:title" content={metadata.ogTitle}/>
            <meta property="og:description" content={metadata.ogDescription}/>
            <meta property="og:image" content={metadata.ogImage}/>
            <meta property="og:url" content={metadata.ogUrl}/>

            {/* Дополнительные метатеги SEO могут быть добавлены здесь */}
        </Head>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar/>
{/*<LocaleSwitcher/>*/}


            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}
