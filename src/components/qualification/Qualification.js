// import React from 'react';
// import './qualification.css';
// import { LiaSchoolSolid } from "react-icons/lia"
// import { IoSchoolSharp } from "react-icons/io5"
// import { LiaCertificateSolid } from "react-icons/lia"

// const Qualification = () => {
//   return (
//     <section id='qualification'>
//       <h5>My Qualification</h5>
//       <h2>Qualification</h2>

//       <div className='qualification__content'>

//         <article className='qualification__item'>
//           <LiaSchoolSolid className='qualification__details-icon' />

//           <div>
//             <h3>SSLC</h3>
//             <p>S.V.HR.SEC.School,Kaniyur</p>
//             <p>Graduated: May 2016</p>
//           </div>

//         </article>

//         <article className='qualification__item'>
//           <IoSchoolSharp className='qualification__details-icon' />

//           <div>
//             <h3>DIPLOMA</h3>
//             <p>NPT College,Pollachi </p>
//             <p>Completed: September 2019</p>
//           </div>

//         </article>

//         <article className='qualification__item'>
//           <LiaCertificateSolid className='qualification__details-icon' />

//           <div>
//             <h3>MERN-Fresher</h3>
//             <p>
//               GUVI Geek Networks, <br />
//               IITM Research Park</p>
//             <p>2023-Present</p>
//           </div>

//         </article>



//       </div>

//     </section>
//   );
// }

// export default Qualification;


import React from 'react';
import './qualification.css';
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchoolSharp } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";

const Qualification = () => {
  return (
    <section id='qualification'>
      <h5>My Education</h5>
      <h2>Qualification</h2>

      <div className='qualification__content'>

        <article className='qualification__item'>
          <LiaSchoolSolid className='qualification__details-icon' />
          <div>
            <h3>SSLC</h3>
            <p>St. Joseph GHSS</p>
            <p>Salem</p>
          </div>
        </article>

        <article className='qualification__item'>
          <IoSchoolSharp className='qualification__details-icon' />
          <div>
            <h3>Engineering</h3>
            <p>Maha College  of Engineering</p>
            <p>Salem</p>
          </div>
        </article>

        {/* <article className='qualification__item'>
          <LiaCertificateSolid className='qualification__details-icon' />
          <div>
            <h3>MERN-Fresher</h3>
            <p>
              GUVI Geek Networks, <br />
              IITM Research Park
            </p>
            <p>2023-Present</p>
          </div>
        </article> */}

      </div>

      {/* Certification Section */}
      <h2>Certifications</h2>
      <div className='certification__content'>
        <article className='certification__item'>
          <LiaCertificateSolid className='certification__details-icon' />
          <div>
            <h3>Full Stack Web Development</h3>
            <p>
              Guvi Geeks Network Pvt Ltd,<br />
              IITM Research Park, Chennai.
            </p>
            <p>2023-Present</p>
          </div>
        </article>
      </div>

    </section>
  );
}

export default Qualification;

