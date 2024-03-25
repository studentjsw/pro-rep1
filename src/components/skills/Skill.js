import React from 'react'
import "./skill.css"
import { BsFillPatchCheckFill } from "react-icons/bs"


const Skill = () => {
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container skill__container'>

        <div className='skill__frontend'>
          <h3>Frontend Development</h3>

          <div className='skill__content'>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>BOOTSTRAP</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>MATERIAL UI</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>


            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>REACT</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>


          </div>

        </div>
        {/* end of frontend */}
        {/* ============================================================================== */}
        <div className='skill__backend'>
          <h3>Backend Development</h3>
          <div className='skill__content'>

            {/* <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article> */}

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>EXPRESS JS</h4>
                {/* <small className='text-light'>Basic</small> */}
              </div>
            </article>

            {/* <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>MONGODB</h4>
                // <small className='text-light'>Intermediate</small>
              </div>
            </article> */}

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>NODEJS</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>AWS</h4>
                {/* <small className='text-light'>Basic</small> */}
              </div>
            </article>


            {/* <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <h4>REACT</h4>
              // <small className='text-light'>Intermediate</small>
            </article> */}


          </div>

        </div>
        <div className='skill__database'>
          <h3>Database</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>MYSQL</h4>
                {/* <small className='text-light'>Basic</small> */}
              </div>
            </article>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>MONGODB</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

          </div>
        </div>
        {/* Deployment */}
        <div className='skill__deployment'>
          <h3>Deployment</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Netlify</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Vercel</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <BsFillPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>RENDER</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill