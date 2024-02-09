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
const TelegrambotData: DataType[] = [
    {
        heading: "Реализация Телеграм Бота для Организации Платного Входа в Приватную Группу",
        imgSrc: ["/images/cases/bot.jpg","/images/cases/bot1.jpg", "/images/cases/bot2.jpg", "/images/cases/bot3.jpg",],
        hashtags: ["#TelegramBot", "#Автоматизация"],
        task: "На руках у команды была задача создания эффективного механизма платного входа в приватную Телеграм группу. Целью проекта являлось интегрирование бота с платежной системой, предоставление различных тарифных планов, отправка напоминаний перед истечением срока подписки, модерация анкет пользователей и автоматическое исключение из группы при завершении подписки.",
        characteristics: ["Продолжительность: ~2 недели", "Команда: 1 человек",],
        features: ["1. Регистрация и интеграция бота с ЮКасса.",
            "2. Платный вход по 3 тарифам.",
            "3. Отправка напоминаний за 3 дня до истечения подписки.",
            "4. Модерация анкет пользователей админом перед оплатой.",
            "5. Автоматическое исключение из группы при завершении подписки."],
        decision: "Был разработан Телеграм бот, интегрированный с ЮКасса. Этот бот обеспечивает удобную регистрацию, выбор тарифа и оплату для доступа в приватную группу.\n" +
            "\n" +
            "Осуществлена функция отправки оповещений за 3 дня до окончания подписки, что позволяет пользователям быть в курсе статуса своей подписки.\n" +
            "\n" +
            "Модерация анкет пользователей осуществляется администратором, где после прохождения модерации пользователи могут приступить к оплате и вступлению в группу.\n" +
            "\n" +
            "В случае истечения срока подписки, бот автоматически исключает пользователя из группы, обеспечивая актуальность и качество контента.",
        results: "Проект успешно реализован, предоставив пользователям гибкий и эффективный механизм платного входа в приватную группу. Разработанный бот предоставляет возможности выбора тарифных планов, оплаты подписки, а также автоматического продления. Администраторы группы получили инструменты для модерации и контроля состава участников.\n" +
            "\n" +
            "Этот проект выделился успешным взаимодействием команды с платежной системой и способностью разработать и внедрить сложную логику бота. В результате удалось повысить безопасность и качество приватной группы, автоматизировав процесс управления участниками."
    },
    // ... другие объекты данных
];

// Основной компонент
const Telegrambot = () => {
    return (
        <div className='case mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 rounded-3xl relative'>
            {TelegrambotData.map((item, index) => (
                <div key={index} className='case-item'>
                    <div className='hashtags'>
                        {item.hashtags.map((tag, tagIndex) => (
                            <div key={tagIndex} className='hashtag bg-lightblue'>
                                <h4 className='hashtag__text text-lg font-normal text-black'>{tag}</h4>
                            </div>
                        ))}
                    </div>
                    <h4 className='text-start text-4xl lg:text-60xl mb-20 font-bold'>{item.heading}</h4>
                    <h5 className='cases__subtitle'>Задача:</h5>
                    <p className='cases__descriptionText'>{item.task}</p>
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
                    <div className='image-container'>
                        {item.imgSrc.map((img, index) => (
                            <Image key={index} src={img} alt={`image-${index}`} width={500} height={500}
                                   className="cases__img mb-5 flex"/>
                        ))}

                    </div>
                    <h5 className='cases__subtitle'>Итоги:</h5>
                    <p className='cases__descriptionText results'>{item.results}</p>
                </div>
            ))}
        </div>
    );
}

export default Telegrambot;
