import React from 'react'
import './About.css'
import profile from '../../assets/Profile-img.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme-pattern"/>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="profile" height="350px" width="300px" className='profile-img'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I recently graduated with a degree in Computer Science from Vaagdevi College of Engineering, Warangal, Telangana. I have developed several websites that are fully responsive and dynamic, showcasing my ability to create seamless and adaptive user experiences.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr className="line" style={{width:"80%"}}/>
                    <p>JavaScript</p><hr style={{width:"70%"}}/>
                    <p>React.js</p><hr style={{width:"80%"}}/>
                    <p>Node.js</p><hr style={{width:"75%"}}/>
                    <p>MySQL</p><hr style={{width:"70%"}}/>
                    <p>python</p><hr style={{width:"80%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>8+</h1>
            <p>Certificates</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>5+</h1>
            <p>Real-world projects completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Attended Podcasts hosted by NxtWave</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>4+</h1>
            <p>Workshops</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
