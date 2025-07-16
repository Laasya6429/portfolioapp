import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css'
import profile from '../../assets/home-profile-img.jpg';

const Home = () => {
  return (
    <div id="home" className='home'>
      <img src={profile} alt="profile" height="350px" width="300px"/>
      <h1><span>I'm Laasya Oleti</span>, Full stack Techie at NIAT</h1>
      <div className='icons'>
         <a href="https://github.com/Laasya6429"><FaGithub className='icon' /></a>
         <a href="https://www.linkedin.com/in/lakshmi-laasya-oleti/"><FaLinkedinIn className='icon'/></a>
      </div>
      <div className='home-action'>
        <div className="home-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="home-resume"><a className='anchor-link' href="https://drive.google.com/file/d/1-KgFtlt87_OiJajg128VOxNLRuMiwyjL/view?usp=sharing">My Resume</a></div>
      </div>
    </div>
  )
}

export default Home
