import Navbar from './customer/components/Navbar'; // Import your Navbar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './customer/components/Footer';
import Home from './customer/components/Home';


const HomeR = () => <div><Home/></div>;
const Categories = () => <div>Categories</div>;
const Shop = () => <div>Shop</div>;
const Offers = () => <div>Offers</div>;
const FreeGifts = () => <div>free-gifts</div>;
const LipaPolePole = () => <div>lipa-polepole</div>;
const HowToOrder = () => <div>how-to-order</div>;
const About = () => <div>about</div>;
const Account = () => <div>account</div>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeR />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/free-gifts" element={<FreeGifts />} />
          <Route path="/lipa-polepole" element={<LipaPolePole />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
