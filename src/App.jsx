import { useState } from 'react'
import { LineGraph } from "./components/Line.jsx";
import { BarChart } from "./components/Bar.jsx";
import {PieGraph} from "./components/Pie.jsx";
import Products from "./components/Products.jsx";
import CA from "./components/CA.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Products />
        <CA />
    </>
  )
}

export default App
