import React, { useEffect, useState } from 'react';
import style from './App.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Pagin from '../Pagination/Pagination';
import AddUser from '../AddUser/AddUser';
import User from '../User/User';
import Modal from '../Modal/Modal';

const App = (props) => {
  const { getUsersThunk, users } = props;
  const [user, setUser] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  console.log(users);
  useEffect(() => {
    getUsersThunk();
  }, []);

  if (!users.length) return <div>loading...</div>;
  return (
    <div className={style.App}>
      <div className={style.content}>
        {users.map((el) => (
          <User
            key={el.id}
            user={el}
            setUser={setUser}
            setModalShow={setModalShow}
            show={modalShow}
          />
        ))}
      </div>
      {modalShow ? <Modal user={user} setModalShow={setModalShow} /> : <AddUser />}

      <Pagin />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { users: state.data };
};

export default connect(mapStateToProps, actions)(App);
