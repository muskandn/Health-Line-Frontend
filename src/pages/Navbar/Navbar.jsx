import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {sideBarMenu,socialIcons} from "./data"
import {HiMenu} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
import { BsXLg, BsListNested } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.scss'
import logo from '../../images/logoRed.png'
const Navbar = () => {
  const [isMobile,setIsMobile]=React.useState(0)
  const [isActive,setIsActive]=React.useState(1)

  
  return (

    <>
    <aside className="aside">
        <div className={isMobile?"aside-wrapper01":"aside-wrapper01"}>
            <Link to={"/"} className="logo-section">
            <img src={logo} alt="About image" className="sidebar__logo" />
            <p id="Name" className='switch__color'>Health Line</p>
            </Link>
            <div style={{color: "red"}}>
            <div className='menubar'>
            <ul className={isMobile?"side-link01":"side-link"}>
            {sideBarMenu.map((link, index) => {
              const { text,url } = link
              return (
                <li key={index} style={{textDecoration:"none"}}>
                  <NavLink onClick = {()=>setIsActive(!isActive)} 
                    className={({ isActive }) => {
                      return isActive ? 'active-links' : 'nav__links'
                    }}
                    to={url}
                    style={{}}
                  >
                    {/* {icon} */}
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
            </div>
            </div>
            {/* <div className={isMobile?"social-icon01":"social-icon"} style={{paddingTop:"6rem"}}>
                {socialIcons.map((icons,index)=>{
                    return(
                        <a href={icons.url} key={index}>
                            {icons.icon}
                        </a>
                    )
                })}
            </div> */}
            
            
        </div>
        
    </aside>
    </>
  )
}

export default Navbar