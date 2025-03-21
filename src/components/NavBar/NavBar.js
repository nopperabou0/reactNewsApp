import React, { useRef, useState } from "react";
// import "../NavBar/NavBar.css";

function NavBar() {
  return (
    <>
      {/* <nav> */}
      {/* </nav> */}
      <nav class="crumbs">
        <ul>
          <li class="crumb">
            <a href="#">Bikes</a>
          </li>
          <li class="crumb">
            <a href="#">BMX</a>
          </li>
          <li class="crumb">Jump Bike 3000</li>
        </ul>
      </nav>

      <h1>Jump Bike 3000</h1>
      <p>
        This BMX bike is a solid step into the pro world. It looks as legit as
        it rides and is built to polish your skills.
      </p>
    </>
  );
}

export default NavBar;
