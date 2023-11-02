import { useRecoilState } from 'recoil';
import { alertState } from '../../recoil/uiState';
import { useCallback } from 'react';

export type handleOpenAlertProp = {
  title: string;
  text?: string;
  errText?: string;
};

export type OnClosedHandler = () => void;

function useAlert(rootOnCloseHanlder?: OnClosedHandler) {
  const [alert, setAlert] = useRecoilState(alertState);

  const handleOpenAlert = useCallback(
    ({ text, errText, title }: handleOpenAlertProp) => {
      setAlert({
        isOpen: true,
        title,
        text,
        errText,
      });
    },
    [setAlert]
  );

  const handleCloseAlert = useCallback(
    (onClosed?: OnClosedHandler) => {
      setAlert({
        isOpen: false,
        title: '',
      });

      if (onClosed) {
        return onClosed();
      }

      rootOnCloseHanlder && rootOnCloseHanlder();
    },
    [setAlert, rootOnCloseHanlder]
  );

  return {
    alertInfo: alert,
    openAlert: handleOpenAlert,
    closeAlert: handleCloseAlert,
  };
}

export default useAlert;
