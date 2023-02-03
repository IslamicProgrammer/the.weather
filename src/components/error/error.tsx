import React from 'react';

import cls from './error.module.scss';

const Error = () => (
  <div className={cls.wrapper}>
    <h3 className={cls.icon}>Sorry, error has occurred!</h3>
  </div>
);

export default Error;
