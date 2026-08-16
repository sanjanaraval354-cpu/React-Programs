import { useState } from "react";
import Student from "./Component/Student";

function App() {
  const [count, setCount] = useState(0);
  console.log("App rendered");
  return (
    <div>
      <h1>React.memo Example</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <Student name="Raj Mehta" />
    </div>
  );
}
export default App;
