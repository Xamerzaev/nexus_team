import Banner from '@/components/Banner/index';
import Aboutus from '@/components/Aboutus/index';
import Dedicated from '@/components/Dedicated/index';
import Digital from '@/components/Digital/index';
import Beliefs from '@/components/Beliefs/index';
import Ourteam from '@/components/Ourteam/index';
import Manage from '@/components/Manage/index';
import FAQ from '@/components/FAQ/index';
import Joinus from '@/components/Joinus/index';
import Insta from '@/components/Insta/index';
import Cases from "@/app/[locale]/cases/page";




export default function Home() {

    return (
        <main>
            <div>
            </div>
            <Banner/>
            <Aboutus/>
            <Dedicated/>
            <Digital/>
            <Beliefs/>
             {/*<Wework /> */}
            <Ourteam/>
             {/*<Featured /> */}
            <Manage/>
            <Cases visibleCount={2} />
            <FAQ/>
            {/* <Testimonials /> */}
            <Joinus/>
            <Insta/>
        </main>
    )
}
