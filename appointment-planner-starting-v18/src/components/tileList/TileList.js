import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ arr }) => {
	return (
		<div>
				{arr.map((element, index) => {
					const { name, ...rest } = element;

          return (
            <Tile name={name} description={rest} key={index} />
          )
				})}
		</div>
	);
};
