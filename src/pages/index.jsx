import Layout from "./Layout.jsx";

import About from "./About";

import Achievements from "./Achievements";

import Certifications from "./Certifications";

import Calculator from "./Calculator";

import Contact from "./Contact";

import Home from "./Home";

import OEM from "./OEM";

import ProductDetail from "./ProductDetail";

import Products from "./Products";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {

    About: About,

    Achievements: Achievements,

    Certifications: Certifications,

    Calculator: Calculator,

    Contact: Contact,

    Home: Home,

    OEM: OEM,

    ProductDetail: ProductDetail,

    Products: Products,

}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || 'Home';
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);

    return (
        <Layout currentPageName={currentPage}>
            <Routes>

                <Route path="/" element={<Home />} />


                <Route path="/About" element={<About />} />

                <Route path="/Achievements" element={<Achievements />} />

                <Route path="/Certifications" element={<Certifications />} />

                <Route path="/Contact" element={<Contact />} />

                <Route path="/Calculator" element={<Calculator />} />

                <Route path="/Home" element={<Home />} />

                <Route path="/OEM" element={<OEM />} />

                <Route path="/ProductDetail" element={<ProductDetail />} />

                <Route path="/Products" element={<Products />} />

            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}