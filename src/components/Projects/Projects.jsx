import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import theme_pattern from '../../assets/theme_pattern.svg';

const projects=[
    {
        id:1,
        imageUrl:"https://cdn.dribbble.com/userupload/11224083/file/original-3d2769866b4db0ae0c4fc7a7b1ed3687.png?resize=450x338&vertical=center",
        name:"Crypto-verse Application With React.Js and Redux Toolkit",
        description:"Provides the information like total number of cryptocurrencies, total markets and market caps.",
        projectUrl:"https://crypto-verse-app.vercel.app/"
    },
    {
        id:2,
        imageUrl:"https://res.cloudinary.com/dcleh8vt3/image/upload/v1752732267/Screenshot_2025-07-17_113315_xcwscl.png",
        name:"PixelView Gallery",
        description:"PixelView Gallery is a sleek and responsive image gallery built with HTML and Tailwind CSS. It offers a clean layout to showcase photos beautifully across all devices.",
        projectUrl:"https://naturegallery12.niat.tech/"
    },
    {
        id:3,
        imageUrl:"https://res.cloudinary.com/dcleh8vt3/image/upload/v1752731726/Screenshot_2025-07-17_112108_v1esa2.png",
        name:"Ice-Cream Website",
        description:"A vibrant and visually delightful ice cream website showcasing a range of tasty treats. Designed with smooth layouts and appealing colors, it brings a refreshing digital experience for dessert lovers.",
        projectUrl:"https://ice-cream-website-sandy.vercel.app/"
    },
    {
        id:4,
        imageUrl:"https://res.cloudinary.com/dolw4wncb/image/upload/v1752561580/download_bknvkb.jpg",
        name:"Wikipedia Search",
        description:"A simple and efficient Wikipedia search tool that fetches real-time results using the Wikipedia API. Designed for quick access to articles with a clean and user-friendly interface.",
        projectUrl:"http://wikiport.niat.tech"
    }
]

const Projects = () => {
  return (
    <div id="projects" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme_pattern"/>
      </div>
      <div className="mywork-container">
        {projects.map(project=>(
            <ProjectCard projectDetails={project} key={project.id}/>
        ))}
      </div>
    </div>
  )
}

export default Projects

