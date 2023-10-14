import React from 'react';

export type BoldProps = {
  children: React.ReactNode;
};

const Bold = ({ children }: BoldProps) => {
  return <span className="font-semibold">{children}</span>;
};

export default Bold;
