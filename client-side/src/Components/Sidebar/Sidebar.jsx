import React, { useState } from "react";

import { FaTh, FaBars } from "react-icons/fa";
import styles from "./Sidebar.module.css";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { TbNotes } from "react-icons/tb";
import { BsFileBarGraph } from "react-icons/bs";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import SuccessRoutes from "../../AllRoutes/SuccessRoutes/SuccessRoutes";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/trends",
      name: "Trends",
      icon: <BsFileBarGraph />,
      nested: [
        { path: "charts", name: "Charts" },
        { path: "nutrition-report", name: "Nutrition Report" },
        { path: "print-report", name: "print-report" },
        { path: "napShot", name: "SnapShot" },
      ],
    },
    {
      path: "/foods",
      name: "Foods",
      icon: <AiOutlineApple />,
      nested: [
        { path: "custom-recipes", name: "Custom Recipes" },
        { path: "Custom-food", name: "Custom Food" },
        { path: "target-scheduler", name: "Target Scheduler" },
        { path: "oracle", name: "Ask the Oracle" },
        { path: "serach-food", name: "Search Food" },
      ],
    },
    {
      path: "/setting",
      name: "Setting",
      icon: <AiOutlineSetting />,

      nested: [
        { path: "account", name: "Account" },
        { path: "profile-targets", name: "Profile Targets" },
        { path: "target-scheduler", name: "Target Scheduler" },
        { path: "fasting", name: "Name" },
        { path: "display", name: "Display" },
        { path: "devices", name: "Devices" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div
        style={{ width: isOpen ? "300px" : "75px" }}
        className={styles.sidebar}
      >
        <div className={styles.top_section}>
          <img
            style={{ display: isOpen ? "block" : "none" }}
            src={"new-logo-footer.png"}
            alt={"logo"}
            width={"50%"}
          />

          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className={styles.bars}
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        <NavLink
          to={"/success/dashboard"}
          className={styles.link}
          activeclassName={styles.active}
        >
          <div className="icon">{<FaTh />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className={styles.link_text}
          >
            Dashboard
          </div>
        </NavLink>
        <NavLink
          to={"/success/diary"}
          className={styles.link}
          activeclassName={styles.active}
        >
          <div className={styles.icon}>{<TbNotes />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className={styles.link_text}
          >
            Diary
          </div>
        </NavLink>
        {menuItem.map((el, i) => {
          return (
            <>
              <NavLink
                to={el.path}
                key={i}
                className={styles.link}
                activeclassName={styles.active}
              >
                <div className={styles.icon}>{el.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }}>
                  <Accordion allowToggle>
                    <AccordionItem border="none">
                      <h2>
                        <AccordionButton>
                          <Box size="40px" as="span" flex="1" textAlign="left">
                            {el.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {el.nested.map((el) => {
                          return (
                            <NavLink to={el.path}>
                              <Box>{el.name}</Box>
                            </NavLink>
                          );
                        })}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </NavLink>
            </>
          );
        })}
        <NavLink
          to={"/success/plan"}
          className={styles.link}
          activeclassName={styles.active}
        >
          <div className={styles.icon}>{<HiOutlineCurrencyDollar />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className={styles.link_text}
          >
            Plan
          </div>
        </NavLink>
        <NavLink
          to={"/success/help"}
          className={styles.link}
          activeclassName={styles.active}
        >
          <div className={styles.icon}>{<IoIosHelpCircleOutline />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className={styles.link_text}
          >
            Help
          </div>
        </NavLink>
        <NavLink
          to={"/success/about"}
          className={styles.link}
          activeclassName={styles.active}
        >
          <div className={styles.icon}>{<FcAbout />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className={styles.link_text}
          >
            About
          </div>
        </NavLink>
        <hr
          style={{ display: isOpen ? "block" : "none" }}
          className={styles.hrtag}
        />
      </div>

      {/* success router render here */}
      <div>
        <SuccessRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
