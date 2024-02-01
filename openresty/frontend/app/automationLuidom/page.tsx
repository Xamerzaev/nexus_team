import Image from "next/image";

// Определение интерфейса для типа данных каждого элемента в массиве
interface DataType {
    heading: string;
    imgSrc: string[];
    hashtags: string[];
    task: string;
    characteristics: string[];
    features: string[];
    decision: string;
    results: string;
}

// Данные, которые будут отображаться в компоненте
const LuidomData: DataType[] = [
    {
        heading: "Интеграция МойСклад и Avito для Эффективности Бизнеса LUIDOM",
        imgSrc: ["/images/cases/luidom1.jpg", "/images/cases/luidom2.jpg", "/images/cases/luidom3.jpg", "/images/cases/luidom4.jpg", "/images/cases/luidom5.jpg"],
        hashtags: ["#МойСклад", "#Авито", "#Автоматизация"],
        task: "Модернизация бизнес-процессов магазина посуды LUIDOM с помощью интеграции сервиса учёта \"МойСклад\" и автоматизации выгрузки товаров на маркетплейс Avito.",
        characteristics: ["Продолжительность: приблизительно 1 месяц.", "Бюджет: 50 000₽.", "Размер команды: 1 специалист"],
        features: ["Каталогизация ассортимента: Оприходование около 1000 наименований товаров.",
            "Структуризация данных поставщиков для точного учёта задолженностей и аналитики.",
            " Загрузка фотографий и базовых характеристик большинства товаров.",
            " Обучение персонала использованию кассовой системы \"МойСклад\" для предотвращения ошибок в учёте.",
            "Ежедневная автоматическая выгрузка товаров на Avito, включая фотографии и описания."],
        decision: "Решение...",
        results: "Результаты..."
    },
    // ... другие объекты данных
];

// Основной компонент
const AutomationLuidom = () => {
    return (
        <div className='cases mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 rounded-3xl relative'>
            {LuidomData.map((item, index) => (
                <div key={index} className='case-item'>
                    <div className='hashtags'>
                        {item.hashtags.map((tag, tagIndex) => (
                            <div key={tagIndex} className='hashtag'>
                                <h4 className='hashtag__text text-lg font-normal text-black'>{tag}</h4>
                            </div>
                        ))}
                    </div>


                    <h4 className='text-start text-4xl lg:text-60xl font-bold'>{item.heading}</h4>


                    <div className='image-container'>
                        {item.imgSrc.map((img, index) => (
                            <Image key={index} src={img} alt={`image-${index}`} width={150} height={100}
                                   className="cases__img mb-5 flex"/>
                        ))}

                    </div>

                    <h5 className='cases__subtitle'>Задача:</h5>
                    <p className='cases__descriptionText description'>{item.task}</p>
                    <h5 className='cases__subtitle'>Характеристики проекта:</h5>
                    <ul className='cases__descriptionText characteristics'>
                        {item.characteristics.map((characteristic, charIndex) => (
                            <li key={charIndex}>{characteristic}</li>
                        ))}
                    </ul>

                    <h5 className='cases__subtitle'>Особенности проекта:</h5>
                    <ol className='cases__descriptionText features'>
                        {item.features.map((feature, featIndex) => (
                            <li key={featIndex}>{feature}</li>
                        ))}
                    </ol>
                    <h5 className='cases__subtitle'>Решение:</h5>
                    <p className='cases__descriptionText decision'>{item.decision}</p>
                    <h5 className='cases__subtitle'>Итоги:</h5>
                    <p className='cases__descriptionText results'>{item.results}</p>
                </div>
            ))}
        </div>
    );
}

export default AutomationLuidom;
