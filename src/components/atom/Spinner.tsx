import React from 'react';
import style from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-30">
      <span className={style.loader}></span>
    </div>
  );
};

export default Spinner;
