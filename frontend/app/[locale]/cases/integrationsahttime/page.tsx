import Image from "next/image";
import {useTranslations} from "next-intl";

// Определение интерфейса для типа данных каждого элемента в массиве
interface DataType {
    imgSrc: string[];
}

// Данные, которые будут отображаться в компоненте
const SahtTimeData: DataType =     {
    imgSrc: ["/images/cases/sahttimelogo.jpg", "/images/cases/sahttime.jpg","/images/cases/sahttime2.jpg","/images/cases/sahttime3.jpg"],
    }


// Основной компонент
const Telegrambot = () => {
    const t = useTranslations("SahtTime");
    return (
        <div className='case mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 rounded-3xl relative'>

            <div className='case-item'>
                <div className='hashtags'>
                    {t.rich(`hashtags`, {
                        hashtag: (chunks) =>
                            <div className='hashtag bg-lightblue'>
                                <h4 className='hashtag__text text-lg font-normal text-black'>{chunks}</h4>
                            </div>
                    })}

                </div>

                <h4 className='text-start text-4xl lg:text-60xl mb-20 font-bold'>{t("heading")}</h4>
                <h5 className='cases__subtitle'>{t("subtitle1")}</h5>
                <p className='cases__descriptionText description'>{t("task")}</p>
                <h5 className='cases__subtitle'>{t("subtitle2")}</h5>
                <ul className='cases__descriptionText characteristics'>

                    <li>{t.rich('characteristics', {br: (chunks) => <br/>})}</li>

                </ul>

                <h5 className='cases__subtitle'>{t("subtitle3")}</h5>
                <ol className='cases__descriptionText features'>
                    <li>{t.rich('features', {br: (chunks) => <br/>})}</li>

                </ol>
                <h5 className='cases__subtitle'>{t("subtitle4")}</h5>
                <p className='cases__descriptionText decision'>
                    {t.rich('decision', {br: (chunks) => <br/>})}
                </p>
                <div className='cases__img image-container'>

                    {SahtTimeData.imgSrc.map((img, index) => (
                        <Image key={index} src={img} alt={`image-${index}`} width={300} height={250}
                               className="mb-5 flex"/>
                    ))}</div>


                </div>
                <h5 className='cases__subtitle'>{t("subtitle5")}</h5>
                <p className='cases__descriptionText results'>{t("results")}</p>

            </div>

    );
}

export default Telegrambot;
