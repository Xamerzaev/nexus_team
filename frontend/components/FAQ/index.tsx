"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import {useTranslations} from "next-intl";

const FAQ = () => {
    const t = useTranslations("FAQ");
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>

            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>{t.rich('title', {br:(chunks) => <br/>})}</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-2xl font-medium">
                                    <span>{t("chapter1")}</span>
                                    {/*<ChevronUpIcon*/}
                                    {/*    className={`${open ? '' : 'rotate-180 transform'*/}
                                    {/*        } h-5 w-5 text-purple-500`}*/}
                                    {/*/>*/}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    {t.rich('description1', {br:(chunks) => <br/>})}

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-2xl font-medium">
                                    <span>{t("chapter2")}</span>
                                    {/*<ChevronUpIcon*/}
                                    {/*    className={`${open ? '' : 'rotate-180 transform'*/}
                                    {/*        } h-5 w-5 text-purple-500`}*/}
                                    {/*/>*/}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb- text-base text-black font-normal opacity-50">
                                    {t.rich('description2', {br:(chunks) => <br/>})}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-2xl font-medium">
                                    <span>{t("chapter3")}</span>
                                    {/*<ChevronUpIcon*/}
                                    {/*    className={`${open ? '' : 'rotate-180 transform'*/}
                                    {/*        } h-5 w-5 text-purple-500`}*/}
                                    {/*/>*/}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    {t.rich('description3', {br:(chunks) => <br/>})}
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