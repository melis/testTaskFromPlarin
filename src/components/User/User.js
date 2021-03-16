import React from 'react';
import style from './User.module.scss';

const User = ({ user, setUser, setModalShow, show }) => {
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
};

export default User;
