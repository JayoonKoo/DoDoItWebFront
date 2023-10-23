import React from 'react';
import Label from '../atom/Label';
import Input from '../atom/Input';

export type InputFieldProps = {
  id: string;
  type?: React.HTMLInputTypeAttribute;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ id, label, type, ...rest }: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} {...rest} />
    </div>
  );
};

export default InputField;
