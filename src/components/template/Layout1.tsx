import React from 'react';

type Layout1Props = {
  children: React.ReactNode;
};

const Layout1 = ({ children }: Layout1Props) => {
  return (
    <div className="bg-gray-50 h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

type TitleProps = {
  children: React.ReactNode;
};

Layout1.Title = ({ children }: TitleProps) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-24">{children}</div>
  );
};

type CenterCardProps = {
  children: React.ReactNode;
};
Layout1.CenterCard = ({ children }: CenterCardProps) => {
  return (
    <div className="bg-white p-16 rounded-md shadow-sm relative">
      {children}
    </div>
  );
};

export const EXLayout1 = () => {
  return (
    <Layout1>
      <Layout1.CenterCard>
        <Layout1.Title>Layout1</Layout1.Title>
        CenterCard
      </Layout1.CenterCard>
    </Layout1>
  );
};

export default Layout1;
