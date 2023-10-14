import React from 'react';

export type ButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button className="block w-full bg-green-400 rounded-md py-2 text-white font-semibold" {...rest}>
      {text}
    </button>
  );
};
export default Button;
