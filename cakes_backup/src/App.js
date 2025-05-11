import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';

const App = () => {
    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.href = logo;
            document.head.appendChild(newLink);
        } else {
            link.href = logo;
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default App;
