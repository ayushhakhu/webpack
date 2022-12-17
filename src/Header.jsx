import React from "react";

export const Header = () => {
  return (
    <>
      <h2>Shaadi</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <li style={{ paddingRight: 20, fontStyle: "italic" }}>Home</li>
        <li style={{ paddingRight: 20, fontStyle: "italic" }}>Contact</li>
      </ul>
    </>
  );
};

export default Header;
