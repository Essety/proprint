// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Router>

//       <Routes>

//         <Route path="/" element={<Home />} />

//       </Routes>

//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";

// function App() {

//   return (

//     <Router>

//       <Header/>

//       <Routes>

//         <Route path="/" element={<Home/>} />

//       </Routes>

//       <Footer/>

//     </Router>

//   );

// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/ScrollToTop";
import BusinessCards from "./pages/BusinessCards";
import ProductDetails from "./pages/ProductDetails";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Account from "./pages/Account";
import CategoryPage from "./pages/CategoryPage";
import Stamps from "./pages/Stamps";
import StampDetails from "./pages/StampDetails";
import Letterheads from "./pages/Letterheads";
import LetterheadDetails from "./pages/LetterheadDetails";
import Billbooks from "./pages/bill-books";
import "./App.css";
import Idcards from "./pages/id-cards";
import Cashvochers from "./pages/cash-vouchers";
import Envelopes from "./pages/envelopes";

function App() {

  return (

    <Router>
         <ScrollToTop />

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/stationery/business-cards" element={<BusinessCards />} />
        <Route path="/stationery/:category" element={<CategoryPage />} />
        <Route path="/stationery/stamps" element={<Stamps />} />
        <Route path="/stamps/:slug" element={<StampDetails/>}/>
        <Route path="/stationery/letterheads" element={<Letterheads/>}/>
<Route path="/stationery/letterheads/:slug" element={<LetterheadDetails/>}/>
<Route path="/stationery/bill-books" element={<Billbooks/>}/>
<Route path="/stationery/id-cards" element={<Idcards/>}/>
<Route path="/stationery/cash-vouchers" element={<Cashvochers/>}/>
<Route path="/stationery/envelopes" element={<Envelopes/>}/>

<Route path="/products/:slug" element={<ProductDetails />} />

      </Routes>

      <Footer/>

    </Router>

  );

}

export default App;