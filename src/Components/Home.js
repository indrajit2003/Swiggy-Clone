import Header from "./Header"
import FoodOption from "./Food"
import FreshVegetables from "./FreshVeg"
import Dine from "./Dine"

export default function Home(){
    return(
        <>
                   <Header></Header>
                   <FoodOption></FoodOption>
                   <FreshVegetables></FreshVegetables>
                   <Dine></Dine>
        </>
    )
}