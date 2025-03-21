import { useState } from 'react'
import { LineGraph } from "./components/Line.jsx";
import { BarChart } from "./components/Bar.jsx";
import {PieGraph} from "./components/Pie.jsx";
import Products from "./components/Products.jsx";
import CA from "./components/CA.jsx";
import {Panier} from "./components/Panier.jsx";
import {Users} from "./components/Users.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="main-container">
            <div className="row">
                <div className="col-6">
                    <Products />
                </div>
                <div className="col-6">
                    <Panier />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <CA />
                </div>
                <div className="col-6">
                    <Users />
                </div>
            </div>
        </div>
    </>
  )
}

export default App
