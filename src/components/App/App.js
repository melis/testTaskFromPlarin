import React, { useEffect, useState, useMemo } from "react";
import style from "./App.module.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Pagin from "../Pagination/Pagination";
import AddUser from "../AddUser/AddUser";
import User from "../User/User";
import Modal from "../Modal/Modal";

const App = (props) => {
  const { getUsersThunk, users } = props;
  const [user, setUser] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  let data = useMemo(() => {
    return { modalShow, setModalShow, setUser };
  }, []);

  useEffect(() => {
    getUsersThunk();
  }, []);

  if (!users.length) return <div>loading...</div>;
  return (
    <div className={style.App}>
      <div className={style.content}>
        {users.map((el) => (
          <User {...data} key={el.id} user={el} />
        ))}
      </div>
      {modalShow ? (
        <Modal user={user} setModalShow={setModalShow} />
      ) : (
        <AddUser />
      )}

      <Pagin />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { users: state.data };
};

export default connect(mapStateToProps, actions)(App);
