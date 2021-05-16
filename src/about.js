import React from 'react';
import 'about.css';
import logo from '../logo.jpeg';
import facebook from '../facebook.png';
import google from '../g+.png';
import twitter from '../twitter.png';
import linkedln from '../linkedln.png';
import image from '../image.png';


function about() {
	return (
		<>
       
    <h1 className="about">About Us</h1>

    <p> Creative Solutions backed by potential impactful results <br><br></br></br>
     At DC & Co., we understand that change is not always easy. Since 2018, we’ve been helping individuals of various classes
    full their economic and financial needs. Our few years of experience have taught us to always make your personal success
    our priority. Our team of experts is ready to help you develop strategies for not only surviving but thriving in the
    future. DCIPL has been successful in being recognized by the Government of India as an MSME and DIPPT venture under
    Startup India Initiative. Drop us an email today to set up your first consultation.</p>
    <br></br>
    <br></br>
    <h1 className="p1">Meet the founders</h1><br><br></br></br>
    <div className="image">
        <img src={image} alt="image"></img>
    </div>
    <div className="banner"></div>
    <div className="footer">
        <a href="#">Home</a>
        <a href="#">PrivacyPolicy</a>
        <a href="#">ContactUs</a>
    </div>
    <div className="fimage">
        <img src= {facebook} alt="facebook"></img>
        <img src= {twitter} alt="twitter"></img>
        <img src= {google} alt="google"></img>
        <img src= {linkedln} alt="linkedln"></img>
    </div>
    
		</>
		)
};

export default about;