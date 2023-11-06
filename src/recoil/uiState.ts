import { atom } from 'recoil';

export type OnCloseType = () => void;
export type OnConfirmType = () => void;

type AlertInitialStateType = {
  isOpen: boolean;
  title: string;
  text?: string;
  errText?: string;
  onClose?: OnCloseType;
  onConfirm?: OnConfirmType;
};

const alertInitialState: AlertInitialStateType = {
  isOpen: false,
  title: '',
  text: '',
  errText: '',
};

export const alertState = atom({
  key: 'alertState',
  default: alertInitialState,
});
