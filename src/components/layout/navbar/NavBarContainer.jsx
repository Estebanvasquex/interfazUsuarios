import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { ContextGeneral } from "../../../context/contextPages";


const NavBarContainer = () => {
  const[numPagesNav, setNumPagesNav]=useState(
    {
      numPages: 1
    }
    )
  const {state, dispatch}=useContext(ContextGeneral)


  const handleChange = (event) => {
    setNumPagesNav({ ...numPagesNav, [event.target.name]: event.target.value });
  };

  useEffect(() => 
  {
    dispatch({
      type: 'SET_NUM_PAGES',
      payload: numPagesNav
    })
  }
  ,[numPagesNav])

  return (
    <div>
      <NavBar handleChange={handleChange} />
      <Outlet />
    </div>
  );
};

export default NavBarContainer;
