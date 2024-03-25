import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
// import { FaInstagram } from "react-icons/fa"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/hema-priya-72a691250/?trk=public-profile-join-page" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/studentjsw' target='_blank' rel="noreferrer"><FaGithub /></a>
      {/* <a href='https://instagram.com' target='_blank' rel="noreferrer"><FaInstagram /></a> */}

    </div>
  )
}

export default HeaderSocials