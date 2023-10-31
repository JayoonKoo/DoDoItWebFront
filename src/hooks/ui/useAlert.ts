import { useRecoilState } from 'recoil';
import { alertState } from '../../recoil/uiState';
import { useCallback } from 'react';

export type handleOpenAlertProp = {
  title: string;
  text?: string;
  errText?: string;
};

export type handleCloseAlertProp = {
  onClosed?: () => void;
};

function useAlert() {
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
    ({ onClosed }: handleCloseAlertProp) => {
      setAlert({
        isOpen: false,
        title: '',
      });
      onClosed && onClosed();
    },
    [setAlert]
  );

  return {
    alertInfo: alert,
    openAlert: handleOpenAlert,
    closeAlert: handleCloseAlert,
  };
}

export default useAlert;
