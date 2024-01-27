import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
// import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
// import Testimonials from './components/Testimonials/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      {/* <Wework /> */}
      <Ourteam />
      {/* <Featured /> */}
      <Manage />
      <FAQ />
      {/* <Testimonials /> */}
      <Joinus />
      <Insta />
    </main>
  )
}
