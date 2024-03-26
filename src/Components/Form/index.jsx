import React from "react";
import { NavLink } from "react-router-dom";

function Form({ arrivals, exits }) {
  return (
    <>
      <nav className="mr-20 flex gap-x-10 py-10">
        <NavLink to={arrivals}>Equipment Arrivals</NavLink>
        <NavLink to={exits}>Equipment Exits</NavLink>
      </nav>
    </>
  );
}

export default Form;
