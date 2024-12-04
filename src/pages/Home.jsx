import React from 'react'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <div className='homepage'>
      {/* hello/hero section */}
      <section id='helloSection' className='section'>

        {/* hero content */}
        <div className="hero-container">
            <div className="hero-filter"></div>
            <div className="hero-text-container">
            <h1 className='main-header'>Hello There!</h1>
            <h2 className='hero-h2'>I'm Kristine Aquino</h2>
            <h3 className='hero-h3'>Welcome to my 2024 Website Design Portfolio</h3>
          </div>

          <div className='hero-btn-container'>
            <button className='primary-btn hero-btn'>
              <a href="#contactSection">Get In Touch</a>
            </button>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id='aboutSection' className='section'>
        {/* main about container */}
        <div className='about-container'>
          <div className="about-left orange-bg">
            <h2>About Me</h2>
            <img src="/img/profile-pic.jpg" alt="about me picture" className='about-me-img'/>
          </div>

          <div className="about-right">
            <p>
              I am versatile in my visual design, coding/technical skills, and am willing to learn a range of programs and software to deliver my solution to the client. I love being involved in a range of stages in the Web/UX Design development workflow, such as UX/UI research, wireframes and prototyping, as well as website development.<br/><br/>I enjoy the challenges of problem-solving and creating interactive interfaces and websites fitting for my brief and potential clients. I enjoy gathering research and tailoring each solution to each client, through UX/UI research, visual development, and coding it with the appropriate languages.
            </p>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section id='skillsSection' className='section'>
        {/* skills main cont */}
        <div>
          <h2>Technical & Personal Skills</h2>
          <div className="skills-main-container">
          <div className="skills-left">
            <p>Techinal skills I have learnt at my time at Yoobee Colleges, experiecing various creative workflows and programs.</p>
            {/* skills grid */}
            <div className="skills-grid">
              <div className="skill-item skill-icon">
                  <img src='/img/icons8-react-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-photoshop-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-illustrator-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-adobe-indesign-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-blender-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-js-100.png'></img>
              </div>
            </div>
          </div>
          <div className="skills-right">
            <p>Personal skills I have learnt and honed throughout my work, student, and life experience.</p>
            {/* skills grid */}
            <div className="skills-grid">
              <div className="skill-item skill-icon">
                  <img src='/img/icons8-presentation-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-creativity-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-puzzle-matching-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-writing-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-group-task-100.png'></img>
              </div>

              <div className="skill-item skill-icon">
                  <img src='/img/icons8-analysis-100.png'></img>
              </div>
            </div>

            
          </div>
          </div>
        </div>
      </section>

      {/* heating company section */}
      <section id='heatingSection' className='section'>
        <div className='project-container'>
          
          <div className="project-left">
            <h2>The Heating Company</h2>
            {/* bento box gallery */}
            <div className="grid orange-bg">
              <div className="item item-0" id='heating1'></div>
              <div className="item item-1" id='heating2'></div>
              <div className="item item-2" id='heating3'></div>
            </div>
          </div>
          <div className="project-right">
            <p>A modernised and simplified version of their existing smart heating app.
            <br /><br />
            From a solo assessment for the UX Design project of my Web & UX Design course, I was required to create a web app for smart electronics company, that allows their customers to control a number of devices 
            at home.
            <br /><br />
            The web app is also required to be responsive and have at least three breakpoints for customers to access the app from their tablets, phones, and smart TVs.
            </p>
            <button className='primary-btn navigate-btn'>
              <a href="https://the-heating-company-redesign-summative.vercel.app/" target='_blank'>Go to Website</a>
            </button>
          </div>
        </div>
      </section>

      {/* wanaka hotels section */}
      <section id='wanakaSection' className='section'>
        <div className='project-container reverse'>
         
          <div className="project-left">
            <h2 className='reverse-text'>Wanaka Hotels</h2>
            {/* bento box gallery */}
            <div className="grid orange-bg">
              <div className="item item-0" id='wanaka1'></div>
              <div className="item item-1" id='wanaka2'></div>
              <div className="item item-2" id='wanaka3'></div>
            </div>
          </div>
          <div className="project-right">
            <p>
              An accommodation finder website near the picturesque Lake Wanaka.
              <br /><br />
              As a part of a solo assessment for the Foundation Coding project of my current course, I was tasked to create a single-page accommodation web app for Tourism NZ that would positively promote NZ tourism internationally. <br/><br/>
              Users would be able to input their info, validate their info, and display accommodation options based on the info that was entered.
              
            </p>
            <button className='primary-btn navigate-btn'>
              <a href="https://wanaka-hotels-website.vercel.app/" target='_blank'>Go to Website</a>  
            </button>
          </div>
        </div>
      </section>

      {/* gakab section */}
      <section id='gakabSection' className='section'>
        <div className='project-container'>
          
          <div className="project-left">
            <h2>Give a Kid a Blanket</h2>
            {/* bento box gallery */}
            <div className="grid orange-bg">
              <div className="item item-0" id='gakab1'></div>
              <div className="item item-1" id='gakab2'></div>
              <div className="item item-2" id='gakab3'></div>
            </div>
          </div>
          <div className="project-right">
            <p>A playful and inspiring child-centric non-profit organisation website.
            <br /><br />
            Made as the final Content Management Systems summative of my Web & UX course. I was tasked to create a redesigned website for a local non-profit using WordPress, and introduce functionality and customisation to its features, posts, and theme. <br /><br />
            The redesign would help promote Give a Kid a Blanket and bring awareness to their cause of helping children stay warm in the Auckland area.
            </p>
            <button className='primary-btn navigate-btn'>Go to Website</button>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id='contactSection' className='section'>
      <div className='contact-container gradient-border'>
          
          <div className="contact-left orange-bg">
            <img src="/img/laptop2.jpg" alt="contact form purple laptop photo" id='contact-img' />
          </div>
          <div className="contact-right">
            <h2 className='text-center'>Contact Me</h2>
            <ContactForm></ContactForm>
          </div>
      </div>
      </section>
    </div>
  )
}

export default Home
