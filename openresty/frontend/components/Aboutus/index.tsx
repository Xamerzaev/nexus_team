import Image from "next/image";
import Link from "next/link";
import {ChevronRightIcon} from '@heroicons/react/20/solid'
import React from "react";
import {useTranslations} from "next-intl";

interface datatype {
    key: string;
    imgSrc: string;

}


const Modal = ({content, onClose}: { content: React.ReactNode, onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay"></div>
            <div
                className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="my-5">{content}</div>
                </div>
            </div>
        </div>
    );
};


const Aboutdata: datatype[] = [
    {
        key: "aboutUs",
        imgSrc: "/images/aboutus/imgOne.svg",

    },

    {
        key: "services",
        imgSrc: "/images/aboutus/imgTwo.svg",

    },

    {
        key: "whyUs",
        imgSrc: "/images/aboutus/imgThree.svg"
    }]


const Aboutus = () => {
    const t = useTranslations("AboutUs");
    // const keys = ["aboutUs", "services", "whyUs"] as const;
    return (


        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image"
                       className="absolute bottom-1 -left-20"/>

                <h4 className='text-center text-4xl lg:text-65xl font-bold'>{t("title")}</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i}
                             className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{t(`${item.key}.subtitle`)}</h4>
                            <Image src={item.imgSrc} alt="About us image" width={100} height={100} className="mb-5"/>
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{t(`${item.key}.paragraph`)}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;
