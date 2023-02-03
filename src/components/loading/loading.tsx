import React from 'react';

import loader from 'assets/icon/loader.svg';

import cls from './loading.module.scss';

const Loading = () => (
  <div className={cls.wrapper}>
    <img className={cls.icon} src={loader} alt="loading" />
  </div>
);

export default Loading;
