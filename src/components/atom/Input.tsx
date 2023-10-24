import React, { forwardRef } from 'react';

export type InputProps = {
  isError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError, ...rest }: InputProps, inputRef) => {
  return (
    <input
      {...rest}
      ref={inputRef}
      className={`w-96 border rounded-md focus:ring-1 focus:ring-green-200 focus:outline-none px-4 py-2 ${
        isError && 'focus:ring-red-200 border-red-400'
      }`}
    />
  );
});

export default Input;
