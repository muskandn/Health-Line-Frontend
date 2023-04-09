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
    text: 'Skills',
    icon: <RiPriceTag2Fill className="link-icon" />,
    url: '/skills',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
  {
    text: 'Magazine',
    icon: <RiBook2Line className="link-icon" />,
    url: '/magazine',
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
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
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
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/muskandn',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/muskandn/',
  },
  {
    icon: <GrDribbble className="icon switch__color" />,
    url: 'https://dribbble.com/muskandn',
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://twitter.com/muskandn',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://www.instagram.com/pic_c.h.a.s.e.r/',
  }
 
]
// skills card
const skillSet = [
  {
    icon: <SiCplusplus className="skills-icon switch__color" />,
    spanText: 'C++',
    url: 'https://devdocs.io/cpp/',
  },
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: 'SASS',
    url: 'https://sass-lang.com/documentation/',
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
    url: 'https://getbootstrap.com/',
  },

  {
    icon: <SiJquery className="skills-icon switch__color" />,
    spanText: 'JQUERY',
    url: 'https://www.w3schools.com/jquery/',
  },
  
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
    url:
      'https://reactjs.org/',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
    url: 'https://www.mongodb.com/',
  },
  {
    icon: <SiMysql className="skills-icon switch__color" />,
    spanText: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: 'EXPRESS JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <SiFedora className="skills-icon switch__color" />,
    spanText: 'Fedora',
    url:
      'https://getfedora.org/',
  },
  
  {
    icon: <SiPython className="skills-icon switch__color" />,
    spanText: 'Python',
    url:
      'https://www.python.org/',
  },
  {
    icon: <SiLinux className="skills-icon switch__color" />,
    spanText: 'Linux',
    url:
      'https://linux.org/',
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: 'Redux',
    url: 'https://redux.js.org/introduction/getting-started',
  },
  {
    icon: <SiPostman className="skills-icon switch__color" />,
    spanText: 'Postman',
    url: 'https://www.postman.com/',
  },
  {
    icon: <SiPostgresql className="skills-icon switch__color" />,
    spanText: 'Postgresql',
    url: 'https://www.postgresql.org/',
  },
  {
    icon: <SiTypescript className="skills-icon switch__color" />,
    spanText: 'Typescript',
    url: 'https://www.typescriptlang.org/',
  },
  {
    icon: <FaStripe className="skills-icon switch__color" />,
    spanText: 'Stripe',
    url: 'https://stripe.com/en-in',
  },
  {
    icon: <SiTrello className="skills-icon switch__color" />,
    spanText: 'Trello',
    url: 'https://trello.com/',
  },
  
  {
    icon: <SiAdobephotoshop className="skills-icon switch__color" />,
    spanText: 'Photoshop',
    url: 'https://www.adobe.com/in/products/photoshop/free-trial-download.html',
  },
  {
    icon: <SiAdobeillustrator className="skills-icon switch__color" />,
    spanText: 'Illustrator',
    url: 'https://www.adobe.com/in/products/illustrator/free-trial-download.html',
  },
  {
    icon: <FiFigma className="skills-icon switch__color" />,
    spanText: 'Figma',
    url: 'https://figma.com',
  },
  {
    icon: <ImFilm className="skills-icon switch__color" />,
    spanText: 'Filmora',
    url:
      'https://filmora.wondershare.com/',
  },
  {
    icon: <SiHeroku className="skills-icon switch__color" />,
    spanText: 'Heroku',
    url: 'https://www.heroku.com/',
  },
  {
    icon: <SiNetlify className="skills-icon switch__color" />,
    spanText: 'Netlify',
    url: 'https://www.netlify.com/',
  },
  {
    icon: <BsGoogle className="skills-icon switch__color" />,
    spanText: 'Googling',
    url: 'https://www.google.com/',
  },
]

export { sideBarMenu, socialIcons, skillSet }