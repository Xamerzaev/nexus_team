import React from 'react';
import { useTranslations } from 'next-intl';

const Page: React.FC = () => {
    const t = useTranslations('Privacy');
    return (
        <div className=' mx-auto max-w-7xl px-4 py-24 mb-32 lg:px-10 rounded-3xl relative'>
            <h1 className=' text-4xl lg:text-6xl font-bold mb-10'>{t('title')}</h1>
            <p className='privacy__descriptionText'>{t('description1')}</p>
            <section>
                <h2 className='privacy__subtitle'>{t('subtitle1')}</h2>
                <ul className='privacy__descriptionText characteristics'>
                    <li>{t.rich('points', {br: (chunks) => <br/>})}</li>

                </ul>
            </section>


            <section>
                <h2 className='privacy__subtitle'> {t('subtitle2')}</h2>
                <p className='privacy__descriptionText'>{t('description2')}
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>{t('subtitle3')}</h2>
                <p className='privacy__descriptionText'>
                    {t('description3')}
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>{t('subtitle4')}</h2>
                <p className='privacy__descriptionText'>
                    {t('description4')}
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>{t('subtitle5')}</h2>
                <p className='privacy__descriptionText'>
                    {t('description5')}
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>{t('subtitle6')}</h2>
                <p className='privacy__descriptionText'>
                    {t('description6')}
                </p>
            </section>

            <section>
                <h2 className='privacy__subtitle'>{t('subtitle7')}</h2>
                <p className='privacy__descriptionText'>
                    {t('description7')}
                </p>
            </section>

            <footer>
                <h2 className='privacy__subtitle'> {t('contacts')}</h2>
                <p className='privacy__descriptionText'>
                    {t.rich('text', {br: (chunks) => <br/>})}
                </p>
            </footer>
        </div>
    );
};

export default Page;
