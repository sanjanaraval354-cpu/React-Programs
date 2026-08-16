import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    console.log("calculation executed");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += number;
    }
    return total;
  }, [number]);
  return (
    <div>
      <h1>useMemo Example</h1>
<h2>Number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
      <h3>Result: {result}</h3>
    </div>
  );
}
export default App;
