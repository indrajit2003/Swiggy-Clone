import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import FoodOption from "./Components/Food"
import FreshVegetables from "./Components/FreshVeg"
import Restaurants from "./Components/Restaurants"



function App(){
    return(
        <>
          <Header></Header>
          <FoodOption></FoodOption>
          <FreshVegetables></FreshVegetables>
          <Restaurants></Restaurants>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)