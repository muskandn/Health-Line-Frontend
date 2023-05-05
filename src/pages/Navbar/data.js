import React from 'react'
// import {HiCheckBadge} from 'react-icons/hi'
// import {SlBadge} from 'react-icons/si'
import {RiPriceTag2Fill} from 'react-icons/ri'
// react-icons
import { FiGrid, FiLinkedin, FiYoutube, FiFigma } from 'react-icons/fi'
import { ImBlogger,ImFilm } from 'react-icons/im'
import { VscProject } from 'react-icons/vsc'
import {ImHome2} from 'react-icons/im'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from 'react-icons/bs'

import {FaStripe} from 'react-icons/fa'

import { RiContactsLine, RiReactjsLine,RiBook2Line } from 'react-icons/ri'
import {
  SiFuturelearn,
  SiSass,
  SiJquery,
  SiExpress,
  SiRedux,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMysql,
  SiPython,
  SiLinux,
  SiPostman,
  SiPostgresql,
  SiCplusplus,
  SiHeroku,
  SiNetlify,
  SiFedora,
  SiTypescript,
  SiTrello
} from 'react-icons/si'

import { GrGithub, GrTwitter, GrInstagram, GrDribbble } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript, IoLogoGameControllerB } from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'

// sidebar menu functionality
const sideBarMenu = [
  {
    text: 'Home',
    icon: <ImHome2 className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Our Doctors',
    icon: <RiPriceTag2Fill className="link-icon" />,
    url: '/doctor',
  },
  {
    text: 'Doctor Registration',
    icon: <VscProject className="link-icon" />,
    url: '/signd',
  },
  {
    text: 'Patient Registration',
    icon: <RiBook2Line className="link-icon" />,
    url: '/signp',
  },
  // {
  //   text: 'Blog',
  //   icon: (
  //     <ImBlogger
  //       className="link-icon"
  //       style={{ fill: 'current', stroke: 'current' }}
  //     />
  //   ),
  //   url: '/blog',
  // },
  // {
  //   text: 'Contacts',
  //   icon: <RiContactsLine className="link-icon" />,
  //   url: '/contact',
  // },
  // {
  //   text: 'Tutorials',
  //   icon: <SiFuturelearn className="link-icon" />,
  //   url: '/tutorial',
  // },
  // {
  //   text: 'Gaming',
  //   icon: <IoLogoGameControllerB className="link-icon" />,
  //   url: '/gaming',
  // },
]



export { sideBarMenu
}