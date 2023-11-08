import '../styles/FreeGiftsHome.css';
import gifts from '../assets/gift.png';
import navbarData from '../assets/navbarData.json';

function FreeGiftsHome() {
  function addLineBreaks(text) {
    return text.split('\n').map((item, key) => (
      <p  key={key}>{item}</p>
    ));
  }

  return (
    <div className="FreeGiftsHome-container">
      <div className="freeGifts">
        <h2>
          <a href="/free-gifts">Free Gifts</a>
        </h2>
        <div data-aos="zoom-in" data-aos-duration="1000" className="gift-content">
          {addLineBreaks(navbarData.giftdata)}
          <img  className="img-gift" loading="lazy" src={gifts} alt="Gift" />
        </div>
      </div>
      <div className="lipa-container">
        <div className="lipapolepole">
          <h3>
            <a href="/free-gifts">Lipa PolePole</a>
          </h3>
          <p data-aos="zoom-in" data-aos-duration="1000">{addLineBreaks(navbarData.lipapolepole)}</p>
        </div>
        <div className="howtoOrder">
          <h3>
            <a href="/free-gifts">How to order...</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FreeGiftsHome;
