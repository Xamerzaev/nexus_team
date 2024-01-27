import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
}

const Modal = ({ content, onClose }: { content: React.ReactNode, onClose: () => void }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay"></div>
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="my-5">{content}</div>
          </div>
        </div>
      </div>
    );
  };
  

const Aboutdata: datatype[] = [
    {
        heading: "О нас",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Мы Nexus - молодая компания, стремящаяся к предоставлению обширного спектра IT-услуг для вашего бизнеса. Наша цель - создать решения, способствующие развитию вашей компании, и обеспечить поддержку на каждом этапе вашего пути к успеху.'
    },
    
    {
        heading: "Услуги",
        imgSrc: "/images/aboutus/imgTwo.svg",
	 paragraph: "Мы специализируемся на создании доступных веб-сайтов, программных скриптов и ботов. " +
			"Наш отдел автоматизации заботится о том, чтобы интегрировать ваш бизнес с системой 'МойСклад', " +
			 "а также обеспечивает синхронизацию с Озоном и Авито. Это значит, что ваш бизнес может легко взаимодействовать " +
			 "с популярными площадками онлайн-торговли, такими как Озон и Авито."
    },

    {
        heading: "Почему мы?",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Индивидуальный подход, инновационные решения, опытная команда. Мы стремимся к совершенству, готовы воплощать ваши идеи в мире IT.'    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>О нас</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Узнайте больше про нас</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>

                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;
