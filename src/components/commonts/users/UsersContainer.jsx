import React, { useContext, useEffect, useState } from "react";
import Users from "./Users";
import { getUsers } from "../../../services/serviceUsers";
import ChangePages from "../changePages/ChangePages";
import { ContextGeneral } from "../../../context/contextPages";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const {state, dispatch}=useContext(ContextGeneral)

  const numRegisterActive = Number(state.numPages.numPages)

  console.log(numRegisterActive)
  
  useEffect(() => {
    const apiUsers = getUsers(numPage);
    apiUsers.then((res) => setUsers(res.data)).then((err) => console.log(err));
  }, [numPage]);

  const handlePages = () => {
    setNumPage(numPage + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f2f2",
      }}
    >
      <Users users={users} numRegisterActive={numRegisterActive}  />
      <ChangePages setNumPage={setNumPage}  />
    </div>
  );
};

export default UsersContainer;
