import React from 'react';
import Label from '../atom/Label';
import Input from '../atom/Input';

export type InputFieldProps = {
  id: string;
  type?: React.HTMLInputTypeAttribute;
  label: string;
};

const InputField = ({ id, label, type }: InputFieldProps) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} />
    </>
  );
};

export default InputField;
