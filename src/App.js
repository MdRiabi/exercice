import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/UseState/Counter";
import Counter1 from "./Components/UseState/Counter1";
import Counter2 from "./Components/UseState/Counter2";
import HookStateArray from "./Components/UseState/HookStateArray";
import EffectExample1 from "./Components/UseEffectPractice/EffectExample1";
/* import ComponentA from "./Components/Context/ComponentA"; */
import ComponentA from "./Components/useContextWithReducer/ComponentA";
import ComponentX from "./Components/useContextWithReducer/ComponentX";
import ComponentZ from "./Components/useContextWithReducer/ComponentZ";
import React, { useReducer } from "react";
import MyCounter1 from "./Components/useReducerPractice/MyCounter1";
import MyCounter2 from "./Components/useReducerPractice/MyCounter2";
import MyCounter3 from "./Components/useReducerPractice/MyCounter3";
export const PriceContext = React.createContext();
export const ItemContext = React.createContext();

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{CoutState: count, CountDispatch: dispatch}}>
      <div className="App">
        Count: {count}
        <ComponentA />
        <ComponentX />
        <ComponentZ />
      </div>
    </CountContext.Provider>
  );
}

export default App;

/* object as state variable

 */

/* <div>*/
{
  /* <Counter /> */
}

{
  /* <Counter1 />
       <Counter/>
       <Counter2/>
       <HookStateArray/>
       <EffectExample1/> */
}
{
  /* <PriceContext.Provider value={"$522"}>
        <ItemContext.Provider value={"Nokia"}>

        <ComponentA />

        </ItemContext.Provider>
        
      </PriceContext.Provider> */
}

{
  /* <MyCounter1/> */
}
{
  /* <MyCounter2 /> */
}
{
  /* <MyCounter3/> */
}
/* </div> */
