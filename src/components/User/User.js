import React from "react";
import style from "./User.module.scss";

const User = React.memo((props) => {
  const { setUser, setModalShow, show, user } = props;

  console.log(user.id);
  return (
    <div
      className={style.userBox}
      onClick={() => {
        if (!show) {
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
