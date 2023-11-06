import { useRecoilState } from 'recoil';
import { OnCloseType, OnConfirmType, alertState } from '../../recoil/uiState';
import { useCallback } from 'react';

export type handleOpenAlertProp = {
  title: string;
  text?: string;
  errText?: string;
  onConfirm?: OnConfirmType;
  onClose?: OnCloseType;
};

function useAlert() {
  const [alert, setAlert] = useRecoilState(alertState);

  const handleOpenAlert = useCallback(
    ({ text, errText, title, onConfirm, onClose }: handleOpenAlertProp) => {
      setAlert({
        isOpen: true,
        title,
        text,
        errText,
        onConfirm,
        onClose,
      });
    },
    [setAlert]
  );

  const handleCloseAlert = useCallback(
    (onClose?: OnCloseType) => {
      setAlert({
        isOpen: false,
        title: '',
      });

      if (onClose) {
        return onClose();
      }

      alert.onClose && alert.onClose();
    },
    [setAlert, alert]
  );

  return {
    alertInfo: alert,
    openAlert: handleOpenAlert,
    closeAlert: handleCloseAlert,
  };
}

export default useAlert;
