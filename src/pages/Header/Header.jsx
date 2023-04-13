import React from "react";
import "./Header.css";
import LOGO from "../../logoRed.png"
import {
  useColorMode,
  IconButton,
  Flex,
  Button,
  Switch,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";

import {Link} from "react-router-dom";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
<div className="header">
    <Flex position="fixed" backgroundColor="rgb(233,243,246)" width="100%" justifyContent="space-between" pr="8rem" pl="8rem" >
    
            
      <div className="logo">
        <img
        src={LOGO}
        alt="logo"
        height="50px"
        width="60px"
      />
      <h1>Health Line</h1>
        
        </div>  
      
      <Flex  top="1rem" right="1rem">
        <Flex fontSize="1rem" pt="1rem">
          <Link to={"/"} className="homePageLinks">
           <h2>Home</h2>
          </Link>
          <Link to={"/about"} className="homePageLinks">
            <h2>About</h2>
          </Link>
          <Link to={"/doctor"} className="homePageLinks">
            <h2>Our Doctors</h2>
            
          </Link>
          <Link to={"/signd"} className="homePageLinks">
            <h2>Doctor Registration</h2>
            
          </Link>
          <Link to={"/signp"} className="homePageLinks">
            <h2>Patient Registration</h2>
            
          </Link>
        </Flex>
      </Flex>
      
      
    </Flex></div>
  );
};

export default Header;