import React from 'react';

export type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className="w-96 border rounded-md focus:ring-1 focus:ring-green-200 focus:outline-none px-4 py-2"
    />
  );
};

export default Input;
