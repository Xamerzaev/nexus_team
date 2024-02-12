"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>

            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Ответы на часто задаваемые <br /> вопросы</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Сколько стоит разработка сайта и сколько времени это занимает?</span>
                                    {/*<ChevronUpIcon*/}
                                    {/*    className={`${open ? '' : 'rotate-180 transform'*/}
                                    {/*        } h-5 w-5 text-purple-500`}*/}
                                    {/*/>*/}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                Ответить на этот вопрос невозможно без уточнений: зависит от числа страниц (1, 20 или, например, 500), от типа дизайна (статичный или анимированный), и наличия технического задания или хотя бы общего представления о объеме работ.
                                Рассмотрим, например, сайт-визитку из 3-5 страниц. Разбиваем на категории:

                                Веб-дизайнеры-фрилансеры в среднем берут 20 тысяч, хотя некоторые могут запросить и до 200 тысяч за лендинг. Однако, существует риск выбора ненадежного исполнителя, и на биржах лишь 2-3 из 100 предложений могут быть нормальными. Сроки - от 3 дней, часто это шаблонные сайты, где многие этапы работы могут быть опущены.

                                Веб-агентства или студии веб-дизайна обычно предлагают цены от 120 до 400 тысяч. Важно отметить, что они предоставляют гарантии, работают официально, и над проектом трудится команда специалистов, а не один студент 3 курса лингвистики. Сроки - от 30 дней, хотя в крупных веб-студиях с большим штатом работников сроки могут быть дольше.

                                Профессиональные агентства не ограничиваются просто дизайном. Они предлагают целый цикл задач и систему анализа, что позволяет создавать уникальные проекты на высоком уровне. Это включает в себя не только сайт, но и анализ бизнеса.

                                Супер-креативные дизайн-агентства, которые входят в топ-30 веб-студий рунета и предоставляют премиум-услуги, могут запросить цены от 500 тысяч и выше. Здесь оплата включает в себя не только создание сайта, но и брендирование. Сроки - от 2 месяцев.

                                Цену в нашей веб-студии можно уточнить по телефону или рассчитать самостоятельно ориентировочно.

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Как заказать сайт и что потребуется?</span>
                                    {/*<ChevronUpIcon*/}
                                    {/*    className={`${open ? '' : 'rotate-180 transform'*/}
                                    {/*        } h-5 w-5 text-purple-500`}*/}
                                    {/*/>*/}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">

                                Перед тем как заказать сайт, важно подготовиться, особенно если вы стремитесь к высококачественному продукту, а не к обычному шаблону за минимальные деньги.

                                В первую очередь изучите конкурентов: оцените их веб-сайты, выявите их сильные и слабые стороны. Подумайте, что именно вы хотите от своего сайта, какую цель он должен служить. Определитесь с основными функциональными требованиями, такими как формы обратной связи, возможность интеграции платежных систем, и необходимость использования системы управления клиентскими данными (CRM).

                                Соберите всю эту информацию в блокноте, чтобы у вас было четкое представление о том, что вам нужно. Это поможет вам более эффективно общаться с разработчиками и избежать недоразумений в процессе создания сайта.

                                После того как вы подготовитесь и определитесь с основными параметрами, вы будете готовы заказать сайт, который соответствует вашим требованиям и ожиданиям.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Почему мы разрабатываем сайты на DRF и NextJS?</span>
                                    {/*<ChevronUpIcon*/}
                                    {/*    className={`${open ? '' : 'rotate-180 transform'*/}
                                    {/*        } h-5 w-5 text-purple-500`}*/}
                                    {/*/>*/}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                Мы выбрали использовать Django REST Framework (DRF) для создания бэкенда и Next.js для фронтенда по нескольким важным причинам.
                                <br />
                                1. Мощность и Гибкость DRF:
                                - DRF предоставляет нам мощные инструменты для создания веб-API. Это важно, поскольку мы можем эффективно управлять данными, обеспечивать их безопасность и легко расширять функциональность нашего проекта.
                                <br />
                                2. Интеграция с Django:
                                - DRF глубоко интегрирован с Django, что придает нашему проекту стабильность и надежность. Django обеспечивает простоту разработки и понятную структуру проекта.
                                <br />
                                3. Современные Возможности Next.js:
                                - Next.js обеспечивает использование современных технологий для фронтенда, таких как Server-Side Rendering (SSR) и Static Site Generation (SSG). Это позволяет улучшить производительность нашего сайта и оптимизировать его загрузку.
                                <br />
                                4. Простая Навигация и Отзывчивость:
                                - Next.js предоставляет интуитивно понятный способ создания навигации на сайте. Также он поддерживает отзывчивые дизайны, что важно для улучшения пользовательского опыта.
                                <br />
                                5. SEO-дружественные Возможности:
                                - Обе технологии, DRF и Next.js, обеспечивают возможности для создания SEO-дружественных веб-приложений. Это важно для повышения видимости нашего сайта в поисковых системах.
                                <br />
                                Совмещение DRF и Next.js предоставляет нам сбалансированный и эффективный инструментарий для создания современных и высокопроизводительных веб-приложений. Это позволяет нам достигнуть наших целей в разработке, обеспечивая надежность, производительность и отзывчивость нашего веб-приложения.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
        
    )
}

export default FAQ;