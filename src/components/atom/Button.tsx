import React from 'react';

export type ButtonProps = {
  text: string;
  className?: string;
  buttonType?: 'cancel' | 'default';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  className,
  buttonType = 'default',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`block w-full ${
        buttonType === 'cancel' ? 'bg-red-400' : 'bg-green-400'
      }  rounded-md py-2 text-white font-semibold ${className} `}
      {...rest}
    >
      {text}
    </button>
  );
};
export default Button;
