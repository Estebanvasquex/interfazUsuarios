import React, { useEffect, useState } from "react";
import Users from "./Users";
import { getUsers } from "../../../services/serviceUsers";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [numRegister, setNumRegister] = useState(1);

  useEffect(() => {
    const apiUsers = getUsers(1);
    apiUsers.then((res) => setUsers(res.data)).then((err) => console.log(err));
  }, []);

  console.log(users);

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "100%", backgroundColor:"#f5f2f2"}}>
      <Users users={users} />
    </div>
  );
};

export default UsersContainer;
