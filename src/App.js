import logo from './logo.svg';
import './App.css';
import Counter from './Components/UseState/Counter';
import Counter1 from './Components/UseState/Counter1';
import Counter2 from './Components/UseState/Counter2';
import HookStateArray from './Components/UseState/HookStateArray';
import EffectExample1 from './Components/UseEffectPractice/EffectExample1';

function App() {
  return (
    <div>
       {/* <Counter /> */}
       <Counter1 />
       <Counter/>
       <Counter2/>
       <HookStateArray/>
       <EffectExample1/>
    </div>
   
  );
}

export default App;

/* object as state variable 
 */