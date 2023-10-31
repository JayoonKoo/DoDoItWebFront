import React from 'react';
import { createPortal } from 'react-dom';

export type AlertInnerProps = {
  children: React.ReactNode;
};

const AlertInner = ({ children }: AlertInnerProps) => {
  const el = document.getElementById('alert');

  return createPortal(<div>{children}</div>, el!);
};

export default AlertInner;
