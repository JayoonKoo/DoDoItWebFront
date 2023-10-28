import React, { forwardRef } from 'react';
import Label from '../atom/Label';
import Input from '../atom/Input';

export type InputFieldProps = {
  id: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, type, errorMessage, ...rest }: InputFieldProps, inputRef) => {
    const isError = errorMessage != null;

    return (
      <div className="flex flex-col">
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input id={id} type={type} {...rest} ref={inputRef} isError={isError} />
        {errorMessage && <span className="text-red-400 text-sm mt-1">{errorMessage}</span>}
      </div>
    );
  }
);

export default InputField;
