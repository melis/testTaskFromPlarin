import Modal from '../Modal/Modal';
import React, { useState } from 'react';
import style from './AddUser.module.scss';

const AddUser = () => {
  const [modalOn, setModalOn] = useState(false);

  if (modalOn) return <Modal setModalShow={setModalOn} />;
  return (
    <div
      className={style.addBox}
      onClick={() => {
        setModalOn(true);
      }}
    >
      +
    </div>
  );
};
export default AddUser;
