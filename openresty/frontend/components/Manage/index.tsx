"use client"
import {useState} from 'react';
import {Switch} from '@headlessui/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';



const names = [
    {
        key: "block1",
        category: "yearly"
    },
    {
        key: "block2",
        category: "yearly"
    },
    {
        key: "block3",
        category: "yearly"
    },
    {
        key: "block4",
        category: "monthly"
    },
    {
        key: "block5",
        category: "monthly"
    },
    {
        key: "block6",
        category: "monthly"
    },


]

const Manage = () => {
    const t = useTranslations('Manage');

    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);
    const handleDiscussProject = (projectName: string) => {
        // Содержание письма
        const emailContent = t('emailContent', {projectName});

        // Формируем строку для mailto:
        const mailtoLink = `mailto:nexuspc.ru@yandex.ru?subject=${t("projectDiscussion")} ${projectName}&body=${encodeURIComponent(emailContent)}`;

        // Открываем почтовый клиент
        window.location.href = mailtoLink;
    };

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-bold'>{t.rich('title', {br:(chunks) => <br/>})}</h3>


                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14}/>
                        <h4 className='text-lg font-semibold'>{t('subtitle1')}</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14}/>
                        <h4 className='text-lg font-semibold'>{t('subtitle2')}</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14}/>
                        <h4 className='text-lg font-semibold'>{t('subtitle3')}</h4>
                    </div>
                </div>


                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>{t('subtitle4')}</div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24}
                           className="toggleImage"/>
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>{t('chapter1')}</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-blue' : 'bg-blue'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>{t('chapter1')}</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{t(`${items.key}.heading`)}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>{t.rich(`${items.key}.price`,{br: (chunks) => <br/>})}  </h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{t(`${items.key}.user`)}</p>
                            <button
                                onClick={() => handleDiscussProject(t(`${items.key}.heading`))}
                                className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'
                            >
                                {t(`${items.key}.button`)}
                            </button>
                            <hr style={{color: "darkgrey", width: "50%", margin: "auto"}}/>
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{t(`${items.key}.profiles`)}</h3>
                            {t.rich (`${items.key}.container`, {
                                text: (chunks) =>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{chunks}</h3>
                            })}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
