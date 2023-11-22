import React, { useEffect } from 'react';

const Alert = ({ message, type, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list]);

  return (
    <div>
      <div className={`alert alert-${type}`}>{message}</div>
    </div>
  );
};

export default Alert;
