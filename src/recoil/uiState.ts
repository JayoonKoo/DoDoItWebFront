import { atom } from 'recoil';

type AlertInitialStateType = {
  isOpen: boolean;
  title: string;
  text?: string;
  errText?: string;
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
