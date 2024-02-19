"use client"
import Image from "next/image";
import { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import {useTranslations} from "next-intl";
const Digital = () => {
    const [modalContent, setModalContent] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalContent('');
        setModalOpen(false);
      };
    const t = useTranslations("FooterContent");
        return (
            <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h5 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
                            {t.rich('title', {br:(chunks) => <br/>})}
                    </h5>
                        <div className="text-center lg:text-start">
                        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-5">

                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4  text-left text-2xl font-medium">
                                    <span className="text-base sm:text-2xl">{t('detailed')}</span>
                                    {/*<ChevronUpIcon*/}
                                    {/*    className={`${open ? '' : 'rotate-180 transform'*/}
                                    {/*        } h-5 w-5 text-purple-500`}*/}
                                    {/*/>*/}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    {t.rich('description', {br:(chunks) => <br/>})}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                       </div>
                    </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <div className="lg:absolute girldoodle">
                            <Image src="/images/digital/programmer.svg" alt="girldoodle" width={815} height={691} />
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen &&
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{modalContent}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Digital;
