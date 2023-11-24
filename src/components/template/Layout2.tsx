import React from 'react';
import Margin from '../atom/Margin';

type Layout2Props = {
  titleElement: React.ReactNode;
  contetnElement: React.ReactNode | string;
};

const Layout2 = ({ titleElement, contetnElement }: Layout2Props) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <Layout2.Title>{titleElement}</Layout2.Title>
        <Margin height={30} />
        <Layout2.Content>{contetnElement}</Layout2.Content>
      </div>
    </div>
  );
};

type Layout2TitleProps = {
  children: React.ReactNode;
};
Layout2.Title = ({ children }: Layout2TitleProps) => {
  return <>{children}</>;
};

type Layout2ContentProps = {
  children: React.ReactNode | string;
};
Layout2.Content = ({ children }: Layout2ContentProps) => {
  return <>{children}</>;
};

export default Layout2;
