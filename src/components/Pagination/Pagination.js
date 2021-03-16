import React from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import style from './Pagination.module.scss';
import * as actions from '../../store/actions';

const Pagin = (props) => {
  const { page, total, per_page, getUsersThunk } = props;

  return (
    <div className={style.pagination}>
      <Pagination
        size="small"
        current={page}
        total={total}
        defaultPageSize={per_page}
        onChange={(val) => {
          getUsersThunk(val);
        }}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    page: state.page,
    total: state.total,
    per_page: state.per_page,
  };
};

export default connect(mapStateToProps, actions)(Pagin);
