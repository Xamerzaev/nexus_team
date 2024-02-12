"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "Поддержка",
        price: 30,
        user: 'Что входит в данный пакет услуг?',
        button: "Обсудить проект",
        profiles: 'Поддержка в течение 24/7',
        posts: 'Инвентаризация уже существующей системы МойСклад',
        templates: "Оприходование товаров",
        view: "Оформление приемок",
        support: 'Оформление контрагентов',
        category: 'yearly'
    },
    {
        heading: "Основа",
        price: 50,
        user: 'Что входит в данный пакет услуг?',
        button: "Обсудить проект",
        profiles: 'Создаем с нуля систему МойСклад и подстраиваем ее под вас',
        posts: 'Инвентаризация',
        templates: "Оприходование",
        view: "Приемка товаров",
        support: 'Оформление контрагентов',
        category: 'yearly'
    },
    {
        heading: "Основа + Интеграция",
        price: 100,
        user: 'Что входит в данный пакет услуг?',
        button: "Обсудить проект",
        profiles: 'Услуги из Основы',
        posts: 'Интеграция МойСклад с маркетплейсами и вашим сайтом',
        support: '24/7 VIP поддержка',
        category: 'yearly'
    },
    {
        heading: "Веб-Сайт",
        price: 50,
        user: 'Цена зависит от сложности',
        button: "Обсудить проект",
        profiles: 'Лендинг',
        posts: 'Корпоративный сайт',
        templates: "Сайт-визитка",
        view: "Интернет-магазин",
        support: 'Сайты онлайн-школ и тд.',
        category: 'monthly'
    },
    {
        heading: "Сервисы/Скрипты",
        price: 40,
        user: 'Цена зависит от сложности',
        button: "Обсудить проект",
        profiles: 'Обработка данных:',
        posts: 'Web-скрапинг и автоматизация веба',
        templates: "API-интеграция",
        view: "Машинное обучение и анализ данных",
        support: 'Сервисы с базами данных и тд.',
        category: 'monthly'
    },
    {
        heading: "Telegram-Бот",
        price: 20,
        user: 'Цена зависит от сложности',
        button: "Обсудить проект",
        profiles: 'Текстовые боты',
        posts: 'Интерактивные боты с кнопками',
        templates: "Боты с обработкой изображений или мультимедиа:",
        view: "Искусственный интеллект и машинное обучение",
        support: 'Интеграция с внешними сервисами и API и тд.',
        category: 'monthly'
    },


]

const Manage = () => {
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);
    const handleDiscussProject = (projectName: string) => {
        // Содержание письма
        const emailContent = `
            Здравствуйте!
    
            Я заинтересован в обсуждении проекта "${projectName}". 
            Хотел бы узнать больше о вашем предложении. 
    
            С уважением,
            [Ваше Имя]
        `;
    
        // Формируем строку для mailto:
        const mailtoLink = `mailto:nexuspc.ru@yandex.ru?subject=Обсуждение проекта: ${projectName}&body=${encodeURIComponent(emailContent)}`;
    
        // Открываем почтовый клиент
        window.location.href = mailtoLink;
    };

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-bold'>Ниже мы перечислили лишь <br /> некоторые услуги, которые у нас доступны</h3>


                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Гарантия качества</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Техническая поддержка</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Точные сроки</h4>
                    </div>
                </div>


                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>Помощь в ТЗ</div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>Отдел разработки</h3>
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
                        <h3 className='text-sm font-medium ml-5'>Отдел автоматизации</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>от {items.price}т. ₽</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button
                        onClick={() => handleDiscussProject(items.heading)}
                        className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'
                    >
                        {items.button}
                    </button>                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
