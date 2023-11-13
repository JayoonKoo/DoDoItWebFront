import { atom } from 'recoil';

// Alert State
export type OnCloseType = () => void;
export type OnConfirmType = () => void;
export type AlertType = 'default' | 'info';

type AlertInitialStateType = {
  isOpen: boolean;
  title: string;
  text?: string;
  errText?: string;
  onClose?: OnCloseType;
  onConfirm?: OnConfirmType;
  type: AlertType;
};

const alertInitialState: AlertInitialStateType = {
  isOpen: false,
  title: '',
  text: '',
  errText: '',
  type: 'default',
};

export const alertState = atom({
  key: 'alertState',
  default: alertInitialState,
});

// Loading State
type LoadingStateType = {
  isLoading: boolean;
};

const loadingInitialState: LoadingStateType = {
  isLoading: false,
};

export const loadingState = atom({
  key: 'loadingState',
  default: loadingInitialState,
});
