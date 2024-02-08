import Image from "next/image";
import Link from "next/link";


interface DataType {
    heading: string;
    imgSrc: string[];
    hashtags: string[];
    href: string;

}

const casesData: DataType[] = [
    {
        heading: "Интеграция МойСклад и Avito для Эффективности Бизнеса LUIDOM",
        imgSrc: ["/images/cases/mainluidom.png",],
        hashtags: ["#МойСклад", "#Авито", "#Автоматизация"],
        href: "/cases/automationluidom",
    },
    {
        heading: "Реализация Телеграм Бота для Организации Платного Входа в Приватную Группу",
        imgSrc: ["/images/cases/maintelegrambot.png"],
        hashtags: ["#TelegramBot", "#Автоматизация"],
        href: "/cases/telegrambot",
    },
    {
        heading: "Пакет Основа + Интеграция",
        imgSrc: ["/images/cases/mainsahttime.png",],
        hashtags: ["#Автоматизация", "#МойСклад", " #Авито", " #Сайт"],
        href: "/cases/integrationsahttime",
    },

];

interface CasesProps {
    visibleCount?: number;
}

const Cases: React.FC<CasesProps> = ({visibleCount}) => {
    const visibleData = typeof visibleCount === "number" ? casesData.slice(0, visibleCount) : casesData;

    return (
        <div id="cases-section" className='mx-auto max-w-7xl px-4 py-24 mb-32 lg:px-10 rounded-3xl relative'>
            <h4 className='text-center text-4xl lg:text-6xl font-bold'>Кейсы</h4>
            <div className='cases grid grid-cols-1 sm:grid-cols-2 my-16 gap-x-16 lg:gap-x-10'>
                {visibleData.map((item, i) => (
                    <Link key={i} href={item.href} passHref>
                        <div
                            className='cases__block hover:bg-navyblue bg-white rounded-3xl pt-10 pl-8 pb-10 pr-6 drop-shadow-2xl group cursor-pointer'>
                            <div className="image__container">
                                {item.imgSrc.map((img, index) => {
                                    const isSingleImage = item.imgSrc.length === 1;
                                    return (
                                        <Image
                                            key={index}
                                            src={img}
                                            alt={`image-${index}`}
                                            width={isSingleImage ? 1 : 250}
                                            height={isSingleImage ? 1 : 300}
                                            layout={isSingleImage ? 'responsive' : 'intrinsic'}
                                            className={`cases__img mb-5 ${isSingleImage ? 'w-full' : ''}`}
                                        />
                                    );
                                })}
                            </div>
                            <div className="mainhashtag">
                                <div className='hashtags'>
                                    {item.hashtags.map((tag, z) => (
                                        <div key={z} className='hashtag bg-lightblue'>
                                            <h4 className='hashtag__text text-lg font-normal text-black'>{tag}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mainText'>
                                <h4 className='text-2xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading.toUpperCase()}</h4>
                            </div>
                            <div className='cases__link group-hover:text-white'>
                                <div className='cases__linktext'>подробнее</div>
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
        </div>
    );
}

export default Cases;