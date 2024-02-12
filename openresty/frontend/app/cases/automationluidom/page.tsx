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
        imgSrc: ["/images/cases/luidomlogo.jpg", "/images/cases/luidom.jpg", "/images/cases/luidom2.jpg", ],
        hashtags: ["#МойСклад", "#Авито", "#Автоматизация"],
        task: "Модернизация бизнес-процессов магазина посуды LUIDOM с помощью интеграции сервиса учёта \"МойСклад\" и автоматизации выгрузки товаров на маркетплейс Avito.",
        characteristics: ["Продолжительность: ~1 месяц.", "Бюджет: 50 000₽.", "Команда: 1 человек"],
        features: ["1.Каталогизация ассортимента: Оприходование около 1000 наименований товаров.",
            "2.Структуризация данных поставщиков для точного учёта задолженностей и аналитики.",
            "3.Загрузка фотографий и базовых характеристик большинства товаров.",
            "4.Обучение персонала использованию кассовой системы \"МойСклад\" для предотвращения ошибок в учёте.",
            "5.Ежедневная автоматическая выгрузка товаров на Avito, включая фотографии и описания."],
        decision: "Мы создали профиль сервиса МойСклад, заполнили нужные данные владельца и купили подписку на нужное количество времени. Далее сразу же приступили к оприходованию товара, это занимает много времени когда сервис МойСклад подключается с нуля, чем больше товаров тем выше цена. Ввели точную информацию, штрихкоды товаров, их закупочная цена, продажная и минимальную (по желанию). Штрихкоды на наклейке и в сервисе должны обязательно совпадать - мы так и поступили.\n" +
            "\n" +
            "Если клиент в будущем планирует в дальнейшем интегрировать сервис МойСклад с сайтом, то мы введем характеристики товара (размер, материал, цвет и т.п). \n" +
            "\n" +
            "В общем, сам процесс подключения МойСклад с нуля при уже существующем магазине с широким ассортиментом весьма прямолинейный, но очень долгий. ",
        results: "Проект был выполнен в срок, а сервис МойСклад полностью интегрирован в бизнес клиента. Теперь необязательно запоминать, что, сколько стоит, какому поставщику сколько должны, за этим уже полностью следит сервис.\n" +
            "\n" +
            "Подключили МойСклад к авито, теперь каждый день по 2 раза происходит выгрузка товаров из наличии на Авито, вместе с фотками и описанием.\n" +
            "сформулируй по красивее, чтоб можно было на сайте разместить",

    },

];


const AutomationLuidom = () => {
    return (
        <div className='case mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 rounded-3xl relative'>
            {LuidomData.map((item, index) => (
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
                    <div className='cases__img image-container'>
                        {item.imgSrc.map((img, index) => (
                            <Image key={index} src={img} alt={`image-${index}`} width={300} height={250}
                                   className=" mb-5 flex"/>
                        ))}

                    </div>
                    <h5 className='cases__subtitle'>Итоги:</h5>
                    <p className='cases__descriptionText results'>{item.results}</p>
                </div>
            ))}
        </div>
    );
}

export default AutomationLuidom;
