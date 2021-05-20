import React from "react";
import { Title } from '../tile/Tile';

export const TileList = ({ objArr }) => {
  return (
    <div>
      {objArr.map((value, index) => <Title value={value} key={index} />)}
    </div>
  );
};
