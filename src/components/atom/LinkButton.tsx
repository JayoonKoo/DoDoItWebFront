import React from 'react';
import { Link } from 'react-router-dom';

export type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
};

const LinkButton = ({ children, to }: LinkButtonProps) => {
  return (
    <Link className="block w-full text-center text-sm mt-1 cursor-pointer" to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
