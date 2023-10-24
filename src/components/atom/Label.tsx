import React from 'react';

export type LabelProps = {} & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, ...rest }: LabelProps) => {
  return (
    <label {...rest} className="font-semibold text-sm mb-1">
      {children}
    </label>
  );
};

export default Label;
