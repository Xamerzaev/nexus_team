import React from 'react';
import {Link, usePathname} from "@/navigation";
import {useLocale, useTranslations} from "next-intl";
import Contactusform from "@/components/Navbar/Contactus";

const LanguageSwitcher: React.FC = () => {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const otherLocale = locale === 'ru' ? 'en' : 'ru';
    const pathname = usePathname();

    return(
        <div>
            <Link href={pathname} locale={otherLocale} passHref>
                <button className="font-semibold text-xl">
                    {t('switchLocale', {locale: otherLocale})}
                </button>
            </Link>
        </div>
    );
};

export default LanguageSwitcher;
