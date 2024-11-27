import { useState } from 'react';
import style from'./App.module.css'
import Cards from './Cards';

import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';

const profiles = [
  {
    id: 1,
    name: "Aryan Yadav",
    designation: "Web Developer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: img1, 
  },
  {
    id: 2,
    name: "Jane Doe",
    designation: "UI/UX Designer",
    message:
      "Design is not just what it looks like and feels like. Design is how it works. Creating intuitive designs is my passion.",
    image: img2,
  },
  {
    id: 3,
    name: "John Smith",
    designation: "Full Stack Developer",
    message:
      "Programming isn't about what you know; it's about what you can figure out. Solving challenges keeps me motivated.",
    image: img3,
  },
  {
    id: 4,
    name: "Alice Johnson",
    designation: "Product Manager",
    message:
      "Great products come from understanding user needs and translating them into actionable outcomes. I love to collaborate and create solutions.",
    image: img4,
  },
  {
    id: 5,
    name: "Bob Brown",
    designation: "Software Engineer",
    message:
      "Code is my craft, and problem-solving is my strength. I focus on building scalable and maintainable software solutions.",
    image: img5,
  },
  {
    id: 6,
    name: "Eve Green",
    designation: "Data Scientist",
    message:
      "Data tells a story, and I’m passionate about uncovering insights through data analysis and machine learning.",
    image: img1,
  },
  {
    id: 7,
    name: "Charlie White",
    designation: "System Architect",
    message:
      "Designing the backbone of complex systems and ensuring they scale with efficiency is what drives me.",
    image: img2,
  },
  {
    id: 8,
    name: "Grace Lee",
    designation: "Digital Marketer",
    message:
      "Digital marketing is about connecting brands with their audience. I specialize in creating impactful online strategies.",
    image: img3,
  },
  {
    id: 9,
    name: "David Harris",
    designation: "DevOps Engineer",
    message:
      "Bridging the gap between development and operations is what I do best. I ensure smooth continuous integration and delivery.",
    image: img4,
  },
  {
    id: 10,
    name: "Sophia Clark",
    designation: "Cybersecurity Expert",
    message:
      "Cybersecurity is critical in today's digital world. My mission is to protect systems from evolving threats and vulnerabilities.",
    image: img5,
  },
];


function App() {
  const [pointer , setPointer] = useState(0);
  function RightpointerHandling() {
    if(pointer == profiles.length - 1) {
      setPointer(0);
    }
    else {
      setPointer(pointer + 1)
    }
  }

  function LeftpointerHandling() {
    if(pointer == 0) {
      setPointer(profiles.length - 1);
    }
    else {
      setPointer(pointer - 1)
    }
  }

  const min = 0 , max = profiles.length - 1;
  let prev = -1;
  function randomTestimonials() {
    let current;
    do {
      current = Math.floor(Math.random() * (max - min + 1));
    } while(current == prev);
    
    prev = current;
    setPointer(current);
  }

  return (
    <div className={style.container}>
        <main className={style.testimonials}>
          <div className={style.headingContainer}>
            <h1 className={style.heading}>Our Testimonials</h1>
            <div className={style.underline}></div>
          </div>

          <div className={style.card}>
                <Cards 
                  key={profiles[pointer].id} 
                  name={profiles[pointer].name}
                  designation={profiles[pointer].designation}
                  message={profiles[pointer].message}
                  image = {profiles[pointer].image}
                  LeftpointerHandling = {LeftpointerHandling}
                  RightpointerHandling = {RightpointerHandling}
                  randomTestimonials = {randomTestimonials}
                />
          </div>
        </main>
    </div>
  )
}

export default App
