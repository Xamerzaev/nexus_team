import React from 'react';

const Page: React.FC = () => {
    return (
        <div className=' mx-auto max-w-7xl px-4 py-24 mb-32 lg:px-10 rounded-3xl relative'>
            <h1 className=' text-4xl lg:text-6xl font-bold mb-10'>Политика конфиденциальности</h1>
            <p className='privacy__descriptionText'>Настоящая Политика Конфиденциальности определяет, как мы, NEXUS, собираем, используем,
                обрабатываем, храним и защищаем личные данные посетителей нашего сайта. Мы ценим вашу приватность и
                стремимся защитить вашу персональную информацию.</p>
            <section>
                <h2 className='privacy__subtitle'>1. Сбор Информации</h2>
                <ul className='privacy__descriptionText characteristics'>
                    <li>1.1. При Подписке на Рассылку: Мы собираем ваш электронный адрес.</li>
                    <li>1.2. При Обращении по Телефону: Мы собираем ваш номер телефона.</li>
                    <li>1.3. Через Форму Обратной Связи: Мы собираем ваш электронный адрес и номер телефона.
                    </li>
                </ul>
            </section>


            <section>
                <h2 className='privacy__subtitle'> 2.Методы Сбора Информации</h2>
                <p className='privacy__descriptionText'>Мы собираем информацию непосредственно от вас при заполнении форм на нашем сайте, при обращении к
                    нам по телефону, и при подписке на нашу рассылку.
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>3. Использование и Раскрытие Информации</h2>
                <p className='privacy__descriptionText'>
                    Ваши персональные данные обрабатываются и хранятся в соответствии с применимым законодательством. Мы
                    используем вашу информацию исключительно для предоставления запрашиваемых услуг и не раскрываем её
                    третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>4. Коммуникация с Посетителями</h2>
                <p className='privacy__descriptionText'>
                    Мы можем использовать ваши контактные данные для связи с вами, отправки информационных материалов и
                    уведомлений о новых услугах.
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>5. Использование Файлов Cookie и Отслеживающих Технологий</h2>
                <p className='privacy__descriptionText'>
                    Мы можем использовать файлы cookie и другие технологии для анализа использования нашего сайта и
                    предоставления персонализированного контента. Вы можете управлять использованием файлов cookie через
                    настройки вашего браузера.
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>6. Отзыв Согласия</h2>
                <p className='privacy__descriptionText'>
                    Вы можете отозвать свое согласие на обработку персональных данных в любой момент, связавшись с нами
                    по указанным контактным данным. Отзыв согласия может повлиять на вашу возможность использовать
                    некоторые функции нашего сайта.
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>7. Изменения в Политике Конфиденциальности</h2>
                <p className='privacy__descriptionText'>
                    Мы оставляем за собой право изменять настоящую Политику Конфиденциальности в любое время. Последняя
                    версия Политики всегда доступна на нашем сайте.
                </p>
            </section>

            <footer>
                <h2 className='privacy__subtitle'> Контакты</h2>
                <p className='privacy__descriptionText'>
                    Если у вас есть вопросы или предложения относительно нашей Политики Конфиденциальности, пожалуйста,
                    свяжитесь с нами.<br/>

                   NEXUS придерживается высоких стандартов защиты и конфиденциальности ваших данных и
                    стремится обеспечить безопасность вашей личной информации.
                </p>
            </footer>
        </div>
    );
};

export default Page;
