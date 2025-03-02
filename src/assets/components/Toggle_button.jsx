import React, { useState } from 'react';

const Toggle_button = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  }
  
  return (
    <>
        <div className="main" style={{ background: toggle ? "black" : "white" }}>
        <h1 style={{ color: toggle ? "white" : "black" }}>DARK MODE</h1>
            <div className="switch">
                <button className={`btn ${toggle?"on":"off"}`} onClick={handleClick}>{toggle?"on":"off"}</button>
            </div>
        </div>
    </>
  )
}

export default Toggle_button;
