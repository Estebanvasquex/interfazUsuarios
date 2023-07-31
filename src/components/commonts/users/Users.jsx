import React from "react";
import "./users.css";
import PageviewIcon from "@mui/icons-material/Pageview";
import IconButton from "@mui/material/IconButton";
import { Modal } from "@mui/material";
import ModalData from "../modal/Modal";

const Users = (props) => {
  const { users, numRegisterActive, isActive, activeModal } = props;

  return (
    <div className="conteiner-users">
      {users?.data?.map((item, index) => {
        if (numRegisterActive > 0) {
          while (index < numRegisterActive) {
            return (
              <div key={item.id} className="card-user">
                <img src={item.avatar} alt="" />
                <div>
                  <h5>{item.first_name}</h5>
                  <h5>{item.email}</h5>
                  <IconButton aria-label="" onClick={activeModal}>
                    <PageviewIcon />
                  </IconButton>
                  
                </div>
                {isActive && (
                    <ModalData
                      name={item.first_name}
                      lasName={item.last_name}
                    />
                  )}
              </div>
            );
          }
        } else {
          return (
            <div key={item.id} className="card-user">
              <img src={item.avatar} alt="" />
              <div>
                <h5>{item.first_name}</h5>
                <h5>{item.email}</h5>
                <IconButton aria-label="" onClick={activeModal}>
                  <PageviewIcon />
                </IconButton>
              </div>
              {isActive && (
                    <ModalData
                      name={item.first_name}
                      lasName={item.last_name}
                    />
                  )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Users;
