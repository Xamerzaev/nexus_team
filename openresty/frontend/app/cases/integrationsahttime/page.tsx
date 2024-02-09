import Image from "next/image";

// Определение интерфейса для типа данных каждого элемента в массиве
interface DataType {
    heading: string;
    imgSrc: string[];
    hashtags: string[];
    task: string;
    characteristics: string[];
    features: string[];
    decision: string[];
    results: string;

}

// Данные, которые будут отображаться в компоненте
const SahtTimeData: DataType[] = [
    {
        heading: "Пакет Основа + Интеграция",
        imgSrc: ["/images/cases/sahttimelogo.jpg", "/images/cases/sahttime.jpg","/images/cases/sahttime2.jpg","/images/cases/sahttime3.jpg",],
        hashtags: ["#Автоматизация", "#МойСклад", " #Авито", " #Сайт"],
        task: "Если вы хотите чтобы ваш бизнес обладал не только грамотным учетом, но еще и местом на маркетплейсах, то данный пакет услуг подойдет именно вам, мы также сможем интегрировать сервис МойСклад с вашим сайтом. Данную операцию мы провели с часовым салоном Saht Time.",
        characteristics: ["Продолжительность ~3 месяца", "Бюджет: 400 000₽", "Команда: 3 человека",],
        features: ["Нужно оприходовать весь существующий ассортимент (около 5 000 наименований!)",
            "Ввести в базу данных контрагентов-поставщиков с которыми работает магазин (это делается для точного учета задолженностей, аналитики и наведения порядка в базе данных)",
            " Загрузить фото каждого товара, а также указать характеристики моделей для их отображения на сайте",
            "  Интегрировать сервис МойСклад с Авито и с сайтом магазина",
            " Придумать систему скидок и реализовать ее, разбить клиентов на два типа и создать категорию \"Распродажа\"",
            "Обучить персонал магазина пользоваться кассой МойСклад для предотвращения возможных ошибок в учете",
            "Разработать (интернет-магазин) сайт с интеграцией всех товаров из МойСклад, с возможностью онлайн оплаты и тд."
        ],
        decision: ["После создания профиля МойСклад мы сразу же приступаем к оприходованию товаров указывая характеристики каждой модели. Так как общее количество наименований ~5000 единиц, нам понадобится несколько сотрудников. \n" +
        "Мы распределили роли подобным образом:\n" +
        "Сотрудник  добавляет товар сразу же указывая все нужные характеристики\n" +
        "Сотрудник №2 добавляет фото и синхронизирует информацию на сайте\n" +
        "Сотрудник №3 занимается интеграцией с сайтом и Авито",
        "2. Все данные поставщиков были также введены в базу данных, налажена система финансов",
        "3. Загрузка фото была выполнена успешно, практически все товары начиная от часов заканчивая застежками обладают своими фото (saht-time.com)",
        "4. Мы интегрировали нужные товары с Авито, по просьбе самого клиента, отгружать все часы мы не стали. Каждый день происходит отгрузка остатков товаров из выбранных клиентом категорий.",
        "5. Создана система скидок: контрагенты А и контрагенты В (скидки -5% и -10%) также у клиентов В категории есть накопительная система баллов. Были созданы и товары по распродаже",
        "6. Персонал был обучен базовым навыкам МойСклад и работе с кассой МойСклад"],
        results: "Проект был выполнен в срок, а сервис МойСклад успешно интегрирован с сайтом клиента и с Авито.",

    },

];

// Основной компонент
const Telegrambot = () => {
    return (
        <div className='case mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 rounded-3xl relative'>
            {SahtTimeData.map((item, index) => (
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
                    <ol className='cases__descriptionText decision'>
                        {item.decision.map((decision:string,index)=>(
                            <li key={index}>{decision}</li>
                        ))}</ol>
                    <div className='cases__img image-container'>
                        {item.imgSrc.map((img, index) => (
                            <Image key={index} src={img} alt={`image-${index}`} width={300} height={250}
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
