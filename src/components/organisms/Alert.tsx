import React, { ForwardedRef } from 'react';
import AlertInner from '../atom/AlertInner';
import useAlert from '../../hooks/ui/useAlert';

export type AlertProps = {};

const Alert = ({}: AlertProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { alertInfo } = useAlert();
  return (
    <AlertInner ref={ref}>
      <div>
        <span>{alertInfo.title}</span>
        {alertInfo.text && <span>{alertInfo.text}</span>}
        {alertInfo.errText && <span>{alertInfo.errText}</span>}
        <button>확인</button>
      </div>
    </AlertInner>
  );
};

export default React.forwardRef(Alert);
