import React from "react";
import { PriceContext, ItemContext } from "../../App";

function ComponentC() {
  return (
    <div>
      <PriceContext.Consumer>
        {(prix) => {
          return (
            <ItemContext.Consumer>
              {
              (item) => {
                return <div>{prix} {item}</div>;
              }
              }
            </ItemContext.Consumer>
          );
        }}
      </PriceContext.Consumer>
    </div>
  );
}

export default ComponentC;
