import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const casesLink = '/cases'

const products: ProductType[] = [
    {
        id: 1,
        section: "menu",
        link: ['home', 'services-section', '/cases', 'aboutus-section'],
    },
    {
        id: 3,
        section: "vacancies",
        link: ['https://forms.yandex.ru/cloud/6560c3f0d04688326ed940c9/'],
    },

];

const sectionNames = {
    'services-section': 'services',
    'aboutus-section': 'aboutUs',
    '/cases': 'cases',
    'faq-section': 'faq',
    'https://forms.yandex.ru/cloud/6560c3f0d04688326ed940c9/': 'developers',
    // Добавьте другие соответствия
};

const Footer = () => {
    const t = useTranslations("FooterContent");

    return (
        <div className="bg-black " id="first-section">
            <div className="mx-auto max-w-2xl pt-24 pb-18 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
                    {/* COLUMN-1 */}
                    <div className="col-span-4">
                        <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20"> {t("socialNetworksTitle")}</h3>
                        <div className="flex gap-4">
                            <div className="footer-icons" style={{padding: '18px 20px'}}>
                                <Link href="https://www.youtube.com/@nexuspc_ru">
                                    <Image src={'/images/footer/youtube.svg'} alt="youtube" width={15} height={20}/>
                                </Link>
                            </div>
                            <div className="footer-icons" style={{padding: '18px 20px'}}>
                                <Link href="https://t.me/nexuspc_ru">
                                    <Image src={'/images/footer/telegram.svg'} alt="telegram" width={20} height={20}/>
                                </Link>
                            </div>
                            <div className="footer-icons" style={{padding: '18px 20px'}}>
                                <Link href="https://www.instagram.com/nexuspc.ru/">
                                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20}/>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* COLUMN-2/3 */}
                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{t(product.section)}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className="mb-5">
                                        {link === casesLink ? (
                                            <Link href={`${link}`} passHref>
                                                <div className="text-white text-lg font-normal mb-6 space-links">
                                                    {t(sectionNames[link as keyof typeof sectionNames] || link)}
                                                </div>
                                            </Link>
                                        ) : (
                                            <Link href={`#${link}`} passHref>
                                                <div className="text-white text-lg font-normal mb-6 space-links">
                                                    {t(sectionNames[link as keyof typeof sectionNames] || link)}
                                                </div>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* COLUMN-4 */}
                    <div className="col-span-4">
                        <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">{t("contactsTitle")}</h3>
                        <div className="text-white">
                            <p>{t("phoneLabel")}</p>
                            <p>Email: <a href="mailto:nexuspc.ru@yandex.ru">nexuspc.ru@yandex.ru</a></p>

                            {/* Добавьте другую информацию о контактах, если необходимо */}
                        </div>
                    </div>
                </div>
            </div>

            {/* All Rights Reserved */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className="text-center md:text-start text-offwhite text-lg">
                                {t("allRightsReserved")} <Link href="/"
                                                               target="_blank"> NexusPC</Link>
                            </h3>
                        </div>
                        <div className="flex justify-centerZ md:justify-end">
                            <Link href="/privacy">
                                <h3 className="text-offwhite pl-6 border-solid  border-footer">{t("privacyPolicy")}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
