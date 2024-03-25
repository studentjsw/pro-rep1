import React from 'react';
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { GiSkills } from "react-icons/gi"
import { MdOutlineCastForEducation } from "react-icons/md"
import { GrProjects } from "react-icons/gr"
import { AiOutlineMessage } from "react-icons/ai"
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      {/* <a href='#home' className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')}  className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a> */}
      <a href='#' onClick={() => setActiveNav('')} className={activeNav === "" ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#skill' onClick={() => setActiveNav('#skill')} className={activeNav === "#skill" ? 'active' : ''}><GiSkills /></a>
      <a href='#qualification' onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? 'active' : ''}><MdOutlineCastForEducation /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}><GrProjects /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage /></a>



    </nav>
  );
}

export default Nav;

// import React, { useState } from 'react';
// import "./nav.css";
// import { AiOutlineHome } from "react-icons/ai"
// import { AiOutlineUser } from "react-icons/ai"
// import { GiSkills } from "react-icons/gi"
// import { MdOutlineCastForEducation } from "react-icons/md"
// import { GrProjects } from "react-icons/gr"
// import { AiOutlineMessage } from "react-icons/ai"

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#")

//   return (
//     <nav>
//       <a href='#' onClick={() => setActiveNav('')} className={activeNav === "" ? 'active' : ''}>
//         <AiOutlineHome />
//         Home
//       </a>
//       <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}>
//         <AiOutlineUser />
//         About
//       </a>
//       <a href='#skill' onClick={() => setActiveNav('#skill')} className={activeNav === "#skill" ? 'active' : ''}>
//         <GiSkills />
//         Skills
//       </a>
//       <a href='#qualification' onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? 'active' : ''}>
//         <MdOutlineCastForEducation />
//         Qualifications
//       </a>
//       <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}>
//         <GrProjects />
//         Projects
//       </a>
//       <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}>
//         <AiOutlineMessage />
//         Contact
//       </a>
//     </nav>
//   );
// }

// export default Nav;

