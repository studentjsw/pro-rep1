// import React from 'react';
// import './about.css';
// import ME from '../../assests/MEAN-Stack-Work.gif';
// import { FaAward } from 'react-icons/fa';
// import { VscProject } from 'react-icons/vsc';
// import { LiaCertificateSolid } from 'react-icons/lia';

// const About = () => {
//   return (
//     <section id='about'>
//       <h5>Get To Know</h5>
//       <h2>About Me</h2>

//       <div className='container about__container'>
//         <div className='about__me'>
//           <div className='about__me-image'>
//             <img src={ME} alt='About Me' />
//           </div>
//         </div>

//         <div className='about__content'>
//           <div className='about__cards'>
//             <article className='about__card'>
//               <FaAward className='about__icon' />
//               <h5>Experience</h5>
//               <small>Fresher</small>
//             </article>
//             <article className='about__card'>
//               <VscProject className='about__icon' />
//               <h5>Projects</h5>
//               <small>4 Projects</small>
//             </article>
//             <article className='about__card'>
//               <LiaCertificateSolid className='about__icon' />
//               <h5>Certificate</h5>
//               <small>Mern-Developer</small>
//             </article>
//           </div>

//           <p>
//             As a fresher with experience in both front-end and back-end
//             development, committed to delivering high-quality, impactful
//             solutions while continuously learning and adapting to new
//             technologies.
//           </p>
//           <a href='#contact' className='btn btn-primary'>
//             Let's Talk
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import './about.css';
import ME from '../../assests/MEAN-Stack-Work.gif';
import { FaAward } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { LiaCertificateSolid } from 'react-icons/lia';

const About = () => {

  const certificateLink = "https://www.guvi.in/certificate?id=F86Wf9950zyQo36021&download=true";
  const projectsLink = 'http://localhost:3000/#projects';

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <a href={certificateLink} target='_blank' rel='noopener noreferrer'>
              <img src={ME} alt='About Me' />
            </a>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <VscProject className='about__icon' />
              <a href={projectsLink} target='_blank' rel='noopener noreferrer'>
                <h5>Projects</h5>
                <small>6 Projects</small>
              </a>
            </article>
            {/* Add the link to the certificate here */}
            <article className='about__card'>
              <a href={certificateLink} target='assests/fullstack.png' rel='noopener noreferrer'>
                <LiaCertificateSolid className='about__icon' />
                <h5>Certificate</h5>
                <small>Mern-Developer</small>
              </a>
            </article>
          </div>

          <p>
            As a fresher with experience in both front-end and back-end
            development, committed to delivering high-quality, impactful
            solutions while continuously learning and adapting to new
            technologies.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

