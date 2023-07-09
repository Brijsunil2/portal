import { useState } from "react";
import HeaderToolbarLink from "./HeaderToolbarLink";

const HeaderToolbar = ({ paths }) => {
  const keys = Object.keys(paths);

  return (
    <ul className="nav nav-underline col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      {
        keys.map((key, i) => 
          // console.log(`${key}: ${paths[key]}`)
          <HeaderToolbarLink 
            key={i}
            id={i}
            title={key}
            path={paths[key]}
          />
        )
      }
    </ul>
  )
}

export default HeaderToolbar