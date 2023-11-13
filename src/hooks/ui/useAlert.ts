import { useRecoilState } from 'recoil';
import {
  AlertType,
  OnCloseType,
  OnConfirmType,
  alertState,
} from '../../recoil/uiState';
import { useCallback } from 'react';

export type handleOpenAlertProp = {
  title: string;
  text?: string;
  errText?: string;
  onConfirm?: OnConfirmType;
  onClose?: OnCloseType;
  type?: AlertType;
};

function useAlert() {
  const [alert, setAlert] = useRecoilState(alertState);

  const handleOpenAlert = useCallback(
    ({
      text,
      errText,
      title,
      onConfirm,
      onClose,
      type = 'default',
    }: handleOpenAlertProp) => {
      setAlert({
        isOpen: true,
        title,
        text,
        errText,
        onConfirm,
        onClose,
        type,
      });
    },
    [setAlert]
  );

  const handleCloseAlert = useCallback(
    (onClose?: OnCloseType) => {
      setAlert({
        isOpen: false,
        title: '',
        type: 'default',
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
