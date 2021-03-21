import React, { useState } from "react";
import api from "../../api/api";
import style from "./Modal.module.scss";

const Modal = (props) => {
  const { user, setModalShow } = props;
  let fn = "";
  let ln = "";
  let em = "";
  let av =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1024px-OOjs_UI_icon_userAvatar.svg.png";

  if (user) {
    fn = user.first_name;
    ln = user.last_name;
    em = user.email;
    av = user.avatar;
  }
  const [firstName, setFirstName] = useState(fn);
  const [lastName, setLastName] = useState(ln);
  const [email, setEmail] = useState(em);

  const dellUser = (id) => {
    api.dellUser(id).then((a) => {
      console.log(a);
      setModalShow(false);
    });
  };
  const updUser = (user) => {
    api.updUser(user).then((a) => {
      console.log(a);
    });
  };
  const createUser = (user) => {
    api.createUser(user).then((a) => console.log(a));
  };

  return (
    <div className={style.modal} style={{ top: window.scrollY }}>
      <span
        className={style.close}
        onClick={() => {
          setModalShow(false);
        }}
      >
        x
      </span>
      <img src={av} />
      <form>
        <input
          type="text"
          placeholder="firs_name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="last_name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </form>
      <div className={style.saveOrDell}>
        {user ? (
          <>
            <div
              onClick={() => {
                dellUser(user.id);
              }}
            >
              Удалить
            </div>
            <div
              onClick={() => {
                updUser({
                  id: user.id,
                  first_name: firstName,
                  last_name: lastName,
                  email,
                });
              }}
            >
              Сохранить
            </div>
          </>
        ) : (
          <div
            onClick={() => {
              createUser({ first_name: firstName, last_name: lastName, email });
            }}
          >
            Добавить
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
