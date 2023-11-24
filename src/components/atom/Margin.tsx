import React from 'react';

export type MarginType = {
  height: number;
};
const Margin = ({ height }: MarginType) => {
  const rem = height / 16 + 'rem';
  return <div style={{ height: rem }}></div>;
};

export default Margin;
