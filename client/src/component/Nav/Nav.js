import React, { useState } from "react";
import "./Nav.css";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { HiChartBar } from "react-icons/hi";
import { RiLineChartLine } from "react-icons/ri";
import { FcMultipleInputs } from "react-icons/fc";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { AiOutlinePieChart, AiOutlineRadarChart } from "react-icons/ai";
const Nav = ({ setChartType }) => {
  const [toggleBox, setToggleBox] = useState(false);
  const [selectBox, setSelectBox] = useState("");
  function changeType(type) {
    setChartType(type);
  }
  function toggle(e) {
    if (
      e.target.classList[0] === "buttons" ||
      e.target.classList[0] === "fixIcons" ||
      e.target.classList[0] === "icons" 
    )
      if (toggleBox != undefined) setToggleBox((toggleBox) => !toggleBox);
  }
  function colorBox(e) {
    setSelectBox(e.target.innerText);
  }
  return (
    <>
      <div className="nav">
        <h1>JAVA WEB assignment</h1>
        <FiAlignJustify
          className="icons"
          onClick={(e) => toggle(e)}
        ></FiAlignJustify>
      </div>
      <div className="bottom-nav">
     <img src="sung4.png"width="300" height="100"></img>
        <div className="time-name">
          <p>20190877 한성진</p>
          <p>20190810 강주형</p>
          <p>20190819 김용민</p>
        </div>
      </div>
      <div
        onClick={(e) => toggle(e)}
        className={`buttons ${toggleBox ? "ToggleButton" : null}`}
      >
        <div className="buttonTap" onClick={colorBox}>
          <FiX className="fixIcons"></FiX>
          
          <button
            className={selectBox === " 라인" ? "clickBox" : null}
            onClick={() => changeType("line")}
          >
            <RiLineChartLine></RiLineChartLine> 라인
          </button>
          <button
            className={selectBox === " 바 " ? "clickBox" : null}
            onClick={() => changeType("bar")}
          >
            <HiChartBar></HiChartBar> 바
          </button>
          <button
            className={selectBox === " 수평바" ? "clickBox" : null}
            onClick={() => changeType("horizontalBar")}
          >
            <RiBarChartHorizontalFill></RiBarChartHorizontalFill> 수평바
          </button>
          
          
        </div>
      </div>
    </>
  );
};

export default Nav;
