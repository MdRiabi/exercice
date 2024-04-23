import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/UseState/Counter";
import Counter1 from "./Components/UseState/Counter1";
import Counter2 from "./Components/UseState/Counter2";
import HookStateArray from "./Components/UseState/HookStateArray";
import EffectExample1 from "./Components/UseEffectPractice/EffectExample1";
import ComponentA from "./Components/Context/ComponentA";
import React from "react";
import MyCounter1 from "./Components/useReducerPractice/MyCounter1";
import MyCounter2 from "./Components/useReducerPractice/MyCounter2";
export const PriceContext = React.createContext();
export const ItemContext = React.createContext();
function App() {

  return (
    <div>
      {/* <Counter /> */}

      {/* <Counter1 />
       <Counter/>
       <Counter2/>
       <HookStateArray/>
       <EffectExample1/> */}
      {/* <PriceContext.Provider value={"$522"}>
        <ItemContext.Provider value={"Nokia"}>

        <ComponentA />

        </ItemContext.Provider>
        
      </PriceContext.Provider> */}

      {/* <MyCounter1/> */}
      <MyCounter2 />
    </div>
  );
}

export default App;

/* object as state variable
 */
