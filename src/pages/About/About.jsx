
import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";
const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  },
  {
    icon: "/images/react.png",
    title: "React Development",
    description: "I make high-quality react of any category at a professional level."
  },
  
  
  
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p className=" animate-pulse">
      
      Hi I am Jahidul Islam, a passionate front-end developer with React Developer form Bangladesh . My Expariencs 3 years
       of hands-on experience building dynamic, responsive, and user-friendly web applications. 
       Skilled in modern technologies like React, React Router DOM, JavaScript, HTML, CSS, Bootstrap,
       and Tailwind CSS, I specialize in creating seamless user interfaces with a focus on performance 
      and accessibility. I have experience with state management, API integration, and component-driven architecture.

     I am proficient in Git, GitHub, and collaborative tools, allowing me to work efficiently within a team and contribute
      to scalable and maintainable codebases. My projects include building a chat application, form validation systems, 
      and interactive profile pages, all while incorporating modern frameworks like React Three Fiber and Framer Motion for 
      enhanced visual and interactive experiences.
      </p>
        <p className=" animate-pulse">
        This version highlights your key skills, experience, and the modern tools you use as a React developer!
         Let me know if you'd like to tweak any part of it.
        </p>
    
    </section>

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>
  </article>
  )
}

export default About