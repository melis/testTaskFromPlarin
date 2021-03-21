import React from "react";
import style from "./User.module.scss";

const User = React.memo((props) => {
  const { setUser, setModalShow, modalShow, user } = props;

  console.log("Render user: ", user.first_name);
  return (
    <div
      className={style.userBox}
      onClick={() => {
        if (!modalShow) {
          setUser(user);
          setModalShow(true);
        }
      }}
    >
      <div className={style.innerBox}>
        <img src={user.avatar} />
        <span>
          {user.first_name} {user.last_name}
        </span>
      </div>
    </div>
  );
});

export default User;
