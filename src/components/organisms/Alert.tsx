import React, { ForwardedRef } from 'react';
import AlertInner from '../atom/AlertInner';
import useAlert from '../../hooks/ui/useAlert';
import Button from '../atom/Button';

export type AlertProps = {};

const Alert = ({}: AlertProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { alertInfo } = useAlert();
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-30">
      <AlertInner ref={ref}>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-96 shadow-lg flex flex-col rounded-md px-5 py-8 justify-between">
          <span className="text-center text-xl font-bold">
            {alertInfo.title}
          </span>
          {alertInfo.text && (
            <span className="text-center mt-5 text-lg">{alertInfo.text}</span>
          )}
          {alertInfo.errText && (
            <span className="text-center mt-2 text-red-700">
              {alertInfo.errText}
            </span>
          )}
          <Button className="mt-8" text={'확인'} />
        </div>
      </AlertInner>
    </div>
  );
};

export default React.forwardRef(Alert);
