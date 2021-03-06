import React, { useState } from "react";
import CrossMenu from "./Cross_menu";
import Svg from "./Svg";
import { motion } from "framer-motion";

const LogoOpacityVariants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: {
         duration: 1.2,
      },
   },
};

const Header = ({ mbl_menu, setMbl_menu }) => {
   const [active, setActive] = useState(false);

   window.addEventListener("scroll", () => {
      const position = document.querySelector(".header-nav");
      let bottomPosition = position.getBoundingClientRect();
      const header = document.querySelector(".header");

      if (window.scrollY >= bottomPosition.bottom) {
         // document.body.style.paddingTop = header.offsetHeight + "px";
         // header.classList.add("active");
         setActive(true);
      } else {
         header.classList.remove("active");
         // document.body.style.paddingTop = 0;
         setActive(false);
      }
   });

   return (
      <div className={active ? "header active" : "header"}>
         <nav className="header-nav">
            <motion.div
               variants={LogoOpacityVariants}
               initial="initial"
               animate="animate"
            >
               <Svg />
            </motion.div>

            <ul>
               <motion.li
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }}
               >
                  <a href="#about">About</a>
               </motion.li>
               <motion.li
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.2, duration: 1, ease: "backOut" }}
               >
                  <a href="#experience">Expertise</a>
               </motion.li>
               <motion.li
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
               >
                  <a href="#work">Work</a>
               </motion.li>
               <motion.li
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.2, duration: 2, ease: "backOut" }}
               >
                  <a href="#contact">Contact</a>
               </motion.li>
            </ul>
            <div className="mobile_menu-btn">
               {!mbl_menu && (
                  <button
                     className="menu-btn"
                     onClick={() =>
                        setMbl_menu((prevMenu) => (prevMenu = !prevMenu))
                     }
                  >
                     <CrossMenu />
                  </button>
               )}
            </div>
         </nav>
      </div>
   );
};

export default Header;
