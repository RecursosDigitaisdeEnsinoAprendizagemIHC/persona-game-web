import React from "react";
import { TrailContainer, TrailItem } from "./Trail.style";

const Trail = ({ locked }) => {
  return (
    <TrailContainer>
      <TrailItem locked={locked}/>
      <TrailItem locked={locked}/>
      <TrailItem locked={locked} />
    </TrailContainer>
  );
};

export default Trail;
