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
        imageUrl:"https://ehopper.com/wp-content/uploads/best-ecommerce-website-design-examples-1800x1013.png",
        name:"NxtTrends E-com",
        description:"Helpful for the users to view the products and add them into the cart And sort the products based on there prices, ratings and categories.",
        projectUrl:"https://naturegallery12.niat.tech/"
    },
    {
        id:3,
        imageUrl:"https://screenshots.codesandbox.io/kuzd2s/0.png",
        name:"Jobby Application",
        description:"Jobby is the app built in the name of flexibility and transparency through which you can access hundreds of job opportunities every day.",
        projectUrl:"https://devjobby.ccbp.tech/login"
    },
    {
        id:4,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXl9EqF0Dbu9oxIz9d_Fe1EAjyo1_bePQC1A&s",
        name:"AI-Based Web Application with React.js & AWS Cloud APIs",
        description:"Spot Faces, Age, Gender & Emotions, Discover Objects - Identify What's Around and Find Celebrities - Spot the Stars.",
        projectUrl:"https://reactvthai.ccbp.tech/"
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

