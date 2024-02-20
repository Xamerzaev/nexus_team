import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";


interface DataType {
    key: string;
    imgSrc: string[];
    // hashtags: string[];
    href: string;

}

const casesData: DataType[] = [
    {
        key: 'luidom',
        imgSrc: ["/images/cases/luidomlogo.jpg","/images/cases/luidom.jpg",],
        href: "/cases/automationluidom",
        // hashtags: ["#TelegramBot", "#Автоматизация"],
    },
    {
       key: 'telegrambot',
        imgSrc: ["/images/cases/bot.jpg", "/images/cases/bot1.jpg"],
        // hashtags: ["#TelegramBot", "#Автоматизация"],
        href: "/cases/telegrambot",
    },
    {
        key: 'sahttime',
        imgSrc: ["/images/cases/sahttimelogo.jpg", "/images/cases/sahttime2.jpg",  ],
        // hashtags: ["#Автоматизация", "#МойСклад", " #Авито", " #Сайт"],
        href: "/cases/integrationsahttime",
    },

];

interface CasesProps {
    visibleCount?: number;
}

const Cases: React.FC<CasesProps> = ({visibleCount}) => {
    const visibleData = typeof visibleCount === "number" ? casesData.slice(0, visibleCount) : casesData;
    const t = useTranslations("Cases");


    return (

        <div id="cases-section" className='mx-auto max-w-7xl px-4 py-24 mb-32 lg:px-10 rounded-3xl relative'>
            <h4 className='text-center text-4xl sm:text-65xl font-bold'>{t('title')}</h4>
            <div className='cases grid grid-cols-1 sm:grid-cols-2 my-16 gap-x-16 lg:gap-x-10'>
                {visibleData.map((item, i) => (
                    <Link key={i} href={item.href} passHref>
                        <div
                            className='cases__block  hover:bg-navyblue bg-white rounded-3xl pt-10 pb-10  drop-shadow-2xl group cursor-pointer'>
                            <div className="image__container ">
                                {item.imgSrc.map((img, index) => (
                                    <div key={index} className={`image__wrapper pt-6 pb-6 ${index === 0 ? '' : 'pr-6'} ${index === 1 ? '' : 'pl-8'}`}>

                                        <Image
                                            src={img}
                                            alt={`image-${index}`}
                                            layout="responsive"
                                            objectFit="cover"
                                            width="300" /* Укажите ширину */
                                            height="300" /* Укажите высоту, сохраняя соотношение сторон */
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mainhashtag">
                                <div className='hashtags pl-8 pr-6'>
                                    {t.rich(`${item.key}.hashtags`, {
                                        hashtag: (chunks) =>  <div className='hashtag'>
                                            <h4 className='group-hover:text-white hashtag__text text-lg font-normal text-black'>{chunks}</h4>
                                        </div>
                                    })}

                                </div>
                            </div>
                            <div className='mainText'>
                                <h4 className='pl-8 pr-6 text-2xl font-semibold text-black mb-5 group-hover:text-white'>{ t(`${item.key}.subtitle`).toUpperCase()}</h4>
                            </div>
                            <div className='cases__link group-hover:text-white pl-8 pr-6'>
                                <div className='cases__linktext'>{t(`${item.key}.detailed`)}</div>
                                <div className='cases__linkArrow linkarrow'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 17.1176L14.4541 5.66353L3.93176 5.66353L3.94118 3H19V18.0588L16.3459 18.0588L16.3365 7.54588L4.88235 19L3 17.1176Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-8">
                {/*<Link href="/cases" passHref >*/}
                {/*    <button className='text-xl hover:bg-navyblue navbutton font-semibold lg:px-12 py-4 px-6 rounded-full  hover:bg-blue-500 hover:text-white transition-colors bg-white '>*/}
                {/*        {t("button")}*/}
                {/*    </button>*/}
                {/*</Link>*/}
            </div>
        </div>
    );
            }


export default Cases;