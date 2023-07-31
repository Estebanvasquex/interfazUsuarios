import React from "react";
import "./users.css";

const Users = (props) => {
  const { users } = props;



  return (
    <div className="conteiner-users">
      { users?.data?.map((item) => {
        return (
          <div key={item.id} className="card-user">
            <img src={item.avatar} alt="" />
            <div>
              <h5>{item.first_name}</h5>
              <h5>{item.email}</h5>
            </div>
          </div>
        );
      })}
    </div>
   
  );
};

export default Users;
