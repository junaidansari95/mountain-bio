import React from 'react';
import './Landing.css';
import Navbar from './Navbar/Navbar';
const vatta = require('../Assets/images/vata.png');
const evrday = require('../Assets/images/evrday.png');
const men = require('../Assets/images/men.png');
const women = require('../Assets/images/women.png');
const logoWhite = require('../Assets/images/dds.png');
const fbicon = require('../Assets/icons/facebook.png');
const instaicon = require('../Assets/icons/instagram.png');
const twittericon = require('../Assets/icons/twitter.png')
export default () => {
    return (
        <div className="landing-first-cover">
            <div style={{ height: '99.9vh' }}>
                <Navbar />
                <div className="landing-intro">
                    <h1 style={{ textAlign: 'left' }}>From the lap</h1>
                    <h1 style={{ textAlign: 'right' }}>of himalayas</h1>
                    <h1 style={{ textAlign: 'left' }}>to your</h1>
                    <h1 style={{ textAlign: 'right', marginTop: -34 }}>home</h1>
                </div>
                <div className="landing-desc">
                    <h3 style={{ textAlign: 'center' }}>Mountain Biologicals carefully  selects, tends to, and nurtures the herbs in himalayas</h3>
                </div>
            </div>
            <div className="doshas">
                <div className="doshas-text">
                    <h1 style={{ margin: 'auto' }}>Out of balance doshas, wreck havoc on your health</h1>
                    <p style={{ margin: 'auto', marginTop: 50 }}>Mountain Biologicals aims to regulate Vatta, Pitta Kapha - the three doshas or three regulating forces of nature. When these are in equilibrium on acquires stregth, health and vitality. On the inside, it maintains digestion and metabolism. It helps one think positively and gives a balanced view of any concerns. When the doshas are in balance,life is lived fully.</p>
                </div>
                <img src={vatta} alt="vatta" className="vatta-img" />
            </div>
            <div className="evrday" style={{ backgroundColor: '#f0fdf5' }}>
                <img src={evrday} alt="evrday" className="evrday-img" />
                <div className="evrday-text">
                    <h1 style={{ margin: 'auto' }}>Essence of ayurveda distilled in a single product</h1>
                    <p style={{ margin: 'auto', marginTop: 50 }}>We combine ayurveda with modern science to give you the potency of ancient wisdom with the ease of contemporary medicine.</p>
                </div>
            </div>
            <div className="women" style={{ backgroundColor: "#fdf4fc" }}>
                <div className="women-text">
                    <h1 style={{ margin: 'auto' }}>Ayurveda for women</h1>
                    <p style={{ margin: 'auto', marginTop: 50 }}>With the changing times, women struggle to juggle between work and life. It's a lifestyle that leads to mental and physical distress, unhealthy eating habits and illness that come along. Mountain Biologicals is here to address it all with Ayurveda</p>
                </div>
                <img src={women} alt="evrday" className="women-img" />
            </div>
            <div className="men" style={{ backgroundColor: "#e3f2f7" }}>
                <img src={men} alt="evrday" className="men-img" />
                <div className="men-text">
                    <h1 style={{ margin: 'auto' }}>Ayurveda for men</h1>
                    <p style={{ margin: 'auto', marginTop: 50 }}>With the changing times, women struggle to juggle between work and life. It's a lifestyle that leads to mental and physical distress, unhealthy eating habits and illness that come along. Mountain Biologicals is here to address it all with Ayurveda</p>
                </div>
            </div>
            <div className="newsletter">
                <img src={logoWhite} alt="logoWhite" />
                <p className="newsletter-text">STAY INFORMED. JOIN OUR NEWLETTER</p>
                <div className="email">
                    <input placeholder="Enter your email" />
                    <button>SEND</button>
                    <div className="icons">
                        <img src={fbicon} alt="icon" />
                        <img src={instaicon} alt="icon" />
                        <img src={twittericon} alt="icon" />
                    </div>
                </div>
                <p className="newsletter-text">HOME | PRODUCT | ARTICLES | DOSHA TEST | CONTACT</p>
                    <div className="copy-right">
                        <p className="newsletter-text">Privacy policy | Terms of use</p>
                        <p className="newsletter-text">Copyright 2020 RENEW PRANA PVT. LTD. All Rights Reserved</p>
                        <p className="newsletter-text">Handcrafted by burqdev</p>
                    </div>
            </div>
        </div>
    )
}