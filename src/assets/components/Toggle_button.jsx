import React, { useState } from 'react';

const Toggle_button = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  }
  return (
    <>
        <div className="switch">
            <button className={`btn ${toggle?"on":"off"}`} onClick={handleClick}>{toggle?"on":"off"}</button>
        </div>
    </>
  )
}

export default Toggle_button;
