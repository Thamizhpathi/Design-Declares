import React, { useState } from "react";
import "../styles/menubar.css";
import { House, Plus } from "lucide-react";
import { RiHomeLine } from "react-icons/ri";
import { LiaInfoSolid } from "react-icons/lia";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
const MenuBarComponent = () => {
  const [visible,setVisible]=useState(false);

  const handleMenu=(e)=>{
    e.preventDefault()
    setVisible(!visible)
  }
  return (
    <>
      <div className="menubar-container">
        <div className="menu-titles">
          <div className="menu-flex">
            <div onClick={handleMenu} >
              Menu
            </div>
            <Plus onClick={handleMenu} className={`icon-style ${visible?"rotate":""}` }width={"50px"} height={"45px"} />
          </div>
          <div className={`menu-links ${visible?"show":""}`}>
            <div className="links">
              <RiHomeLine size={"28px"} style={{ height: "48px" }} />
              <a href="">Home</a>
            </div>
            <div className="links">
              <LiaInfoSolid size={"28px"} style={{ height: "48px" }} />
              <a href="https://designdeclares.com/about">About</a>
            </div>
            <div className="links">
              <IoNewspaperOutline size={"28px"} style={{ height: "48px" }} />
              <a href="https://designdeclares.com/latest">Latest</a>
            </div>
            <div className="links">
              <MdOutlineEmail size={"28px"} style={{ height: "48px" }} />
              <a href="https://designdeclares.com/latest">Contact</a>
            </div>
            <div className="links">
              <IoGlobeSharp size={"28px"} style={{ height: "48px" }} />
              <a href="https://designdeclares.com/contact">choose Global chapter</a>
            </div>
            
          </div>
          <div className="declare ">
            <a href="">Declare Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBarComponent;
