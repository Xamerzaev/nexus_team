import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">



            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div className="relative  ">
                        <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="dedicated__spiral absolute   hidden lg:block -z-10" />
                        <Image src="/images/dedicated/logo.png" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">IT-решение, которое будет отличать от конкурентов</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Наши профессионалы объединились в крутую команду, чтобы создавать умные и эффективные решения для вашего успеха.</p>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Мансур Хамерзаев, CEO</p> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
