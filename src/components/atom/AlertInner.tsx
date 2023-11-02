import React, { ForwardedRef } from 'react';
import { createPortal } from 'react-dom';

export type AlertInnerProps = {
  children: React.ReactNode;
};

const AlertInner = (
  { children }: AlertInnerProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const el = document.getElementById('alert');

  return createPortal(<div ref={ref}>{children}</div>, el!);
};

export default React.forwardRef(AlertInner);
