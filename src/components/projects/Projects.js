import React from 'react'
import './projects.css'
import IMG1 from '../../assests/ecommerce.jpg'
import IMG2 from '../../assests/log.jpg'
import IMG3 from '../../assests/money tracker.jpg'
import IMG4 from '../../assests/note app.png'
import IMG5 from '../../assests/pizza.jpg'
import IMG6 from '../../assests/stack_overflow_-1_4x.png'


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>E-commerce</h3>
          <h5>
          Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing. You can use ecommerce channels such as your own website, an established selling website like Amazon, or social media to drive online sales.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/studentjsw/e-commerce.git' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/studentjsw/e-comme-bck.git' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://sunny-clafoutis-4c1b9c.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Login frontend</h3>
          <h5>
            The Item Catalog project is a web application designed for managing and cataloging items. 
            Users can interact with the application to view, add, update, and delete items within the catalog.
            A login page specifies the login URL in a web application that users must pass through to get to the authenticated URLs at the heart of the application. Authenticated URLs are URLs that become accessible to users only after they successfully log in to the login URL.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/studentjsw/log-frontend.git' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href=': https://github.com/studentjsw/log-backend.git' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://classy-brigadeiros-095dd5.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Money tracker</h3>
          <h5>
          Expense tracker apps help you collect and classify your purchases so that you can spot where to trim your costs. Or, in the case of building net worth, places where you can allocate more money, such as savings. You might track expenses for a while just to check where your money’s going, or it might be a stepping stone toward making and following a budget
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/studentjsw/money--front.git' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/studentjsw/money-backend.git' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://stunning-narwhal-502ffb.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Notes App</h3>
          <h5>
          Notes app which is used to add the content or tasks inside the notes app. Once you add the content, then you can change it and also remove it. So, It’s a great application for everyone who can use it for different purposes.

Taking notes has become an integral part of our daily lives. Whether it’s jotting down important information, making to-do lists, or simply saving ideas, having a convenient way to manage notes can be incredibly useful.
            The Notes App is a web application designed to help users create, manage, and 
            organize their notes. It provides a digital platform for users to jot down thoughts, ideas, 
            to-do lists, or any other information they want to remember.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/studentjsw/not-frt.git' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/studentjsw/not-bck.git' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://ornate-torte-a0e1fa.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>pizza App</h3>
          <h5>
          PizzApp computes the ingredients needed to obtain a dough with the selected features and suggests the amount of yeast to be used. It also lets you save your recipes, reload and share them.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/studentjsw/pizza-front.git' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/studentjsw/pizza-backend.git' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://effulgent-selkie-459ea6.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>stack overflow</h3>
          <h5>
          Stack Overflow is important for developers because it provides a platform for programmers to ask and answer questions, share knowledge and experiences, and collaborate with each other to solve coding problems.
          Stack Overflow is a question and answer site for professional and enthusiast programmers. It's built and run by you as part of the Stack Exchange network of Q&A sites. With your help, we're working together to build a library of detailed, high-quality answers to every question about programming.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/studentjsw/stacks--f.git' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/studentjsw/stac-new.git' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://papaya-vacherin-8c6a7d.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>Task Management</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Chatgpt</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Flight Booking</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Projects