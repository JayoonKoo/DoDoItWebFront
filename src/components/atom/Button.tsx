import React from 'react';

export type ButtonProps = {
  text: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`block w-full bg-green-400 rounded-md py-2 text-white font-semibold ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};
export default Button;
