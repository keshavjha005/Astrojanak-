import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Contact from "./pages/Contact"; // (Create this page if not yet)
// import Blog from "./pages/Blog";       // Same for this
import PremiumKundli from "./pages/PremiumKundli"; // etc...
import Home from "./pages/Home";
import About from "./pages/About";
import BuyPersKundli from "./pages/BuyPersKundli";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermAndServices from "./pages/TermAndServices";
import RefundPolicy from "./pages/RefundPolicy";
import Panchang from "./pages/Panchang";
import NumerlogyCal from "./pages/NumerlogyCal";
import HoroScope from "./components/HoroScope";
import MobileCal from "./pages/MoblieCal";
import NameCal from "./pages/NameCal";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";


function App() {
  return (
    <Router>
      <div
        className="bg-white"
        style={{ fontFamily: `"Philosopher", sans-serif` }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy-pers-kundli" element={<BuyPersKundli />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/premium-kundli" element={<PremiumKundli />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-services" element={<TermAndServices />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/panchang" element={<Panchang />} />
          <Route path="/numerology" element={<NumerlogyCal />} />
          <Route path="/mobile-cal" element={<MobileCal />} />
          <Route path="/name-cal" element={<NameCal />} />
          <Route path="/horoscope" element={<HoroScope />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/thankyou" element={<ThankYou />} />

          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
