import React from 'react';
import AlertInner from '../atom/AlertInner';
import useAlert from '../../hooks/ui/useAlert';

const Alert = () => {
  const { alertInfo } = useAlert();
  return (
    <AlertInner>
      <div>
        <span>{alertInfo.title}</span>
        {alertInfo.text && <span>{alertInfo.text}</span>}
        {alertInfo.errText && <span>{alertInfo.errText}</span>}
        <button>확인</button>
      </div>
    </AlertInner>
  );
};

export default Alert;
