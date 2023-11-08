import HomeContact from './HomeContact';
import FreeGiftsHome from './FreeGiftsHome';
import Categories from './Categories';
import Offers from './Offers';
import {EmblaCarousel} from './Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      {/* <div><Offers /></div> */}
      <div><Categories /></div>
      <div><FreeGiftsHome/></div>
      <div><EmblaCarousel/></div>
      <div className="contactNav"><HomeContact /></div>
    </div>
  );
}

export default Home;
