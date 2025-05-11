import React, { useState, useEffect } from 'react';
import './Homepage.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import cake1Image from '../assets/cake1.png';
import cake2Image from '../assets/cake2.png';
import cake3Image from '../assets/cake3.png';

const Homepage = () => {
    const featuredCakes = [
        {
            image: cake1Image,
            title: 'Chocolate Cake',
            description: 'Rich and moist chocolate cake topped with chocolate ganache.',
        },
        {
            image: cake2Image,
            title: 'Vanilla Cake',
            description: 'Classic vanilla cake with a creamy vanilla frosting.',
        },
        {
            image: cake3Image,
            title: 'Red Velvet Cake',
            description: 'Delicious red velvet cake with cream cheese frosting.',
        },
    ];

    const testimonials = [
        { name: 'Joyce Odhiambo', text: "Best cakes I've ever tasted! Highly recommend." },
        { name: 'Ronnie Ochupe', text: "The chocolate cake is heavenly. Will order again!" },
        { name: 'Judy Nancy', text: "Fresh and delicious cakes, perfect for every occasion." },
        { name: 'Joy Mella', text: "Amazing service and even better cakes!" },
        { name: 'Sylvan Odhiambo II', text: "The vanilla cake is to die for!" },
        { name: 'Irene Anyango', text: "Great variety and excellent quality!" },
        { name: 'Billy Mella', text: "Absolutely love their red velvet cake." },
        { name: 'Joash Oloo', text: "Perfect cakes for birthdays and celebrations." },
        { name: 'Winnie Awuor', text: "Highly impressed with the taste and presentation." },
        { name: 'Emmy Baraka', text: "Superb customer service and delightful cakes." },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [visible, setVisible] = useState(false);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) {
            setGreeting('Good Morning');
        } else if (hours < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrentTestimonial((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
                setVisible(true);
            }, 500);
        }, 2500);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="homepage">
            <header className="header">
                <div className="top-bar"></div>
                <nav className="navbar">
                    <div className="logo">
                        <h1 className="cake-text"><strong>Alicious Delicious Cakes</strong></h1>
                        <img src={logoImage} alt="Logo" className="navbar-logo" />
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart"><FaShoppingCart /></Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <section className="hero-section">
                    <h2>{greeting}!</h2>
                    <p>Sweet Bakery offers the best cakes for you.</p>
                    <button className="shop-button">
    <Link to="/shop" className="shop-link">Shop Now</Link>
</button>

                </section>

                <section className="featured-cakes">
                    <div className="cards-container">
                        {featuredCakes.map((cake, index) => (
                            <div key={index} className="card">
                                <img src={cake.image} className="card-img-top" alt={cake.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{cake.title}</h5>
                                    <p className="card-text">{cake.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <hr></hr>

                <section className="about-section">
                    <h3><strong>Only Fresh Cakes</strong></h3>
                    <p>All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
                </section>
                <hr></hr>

                <section className="testimonials-section">
                    <h3><strong>Customer Testimonials</strong></h3>
                    <div className={`testimonial ${visible ? 'show' : ''}`}>
                        <p>{testimonials[currentTestimonial].name}: {testimonials[currentTestimonial].text}</p>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>
                    Contact us:
                    <a href="mailto:info@aliciousdeliciouscakes.com" className="footer-link">
                        info@aliciousdeliciouscakes.com
                    </a>
                </p>
                <p>
                    Phone:
                    <a href="tel:+254723619572" className="footer-link">
                        0723619572
                    </a>
                </p>
                <p>
                    Website designed by <strong>WASETH EMMANUEL</strong>. Need a similar website?
                    <a href="mailto:wasethsapriso@gmail.com" className="footer-link"> Contact Me</a>
                    or call
                    <a href="tel:+254798863379" className="footer-link"> 0798863379</a> .
                </p>
            </footer>
        </div>
    );
};

export default Homepage;
