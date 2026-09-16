import { imageGridCards } from "../Utils/FreshVeg"
import VegCard from "./VegCard"

export default function FreshVegetables(){
    return(
    <div className="w-[80%] cotainer mx-auto mt-20">
        <p className="text-4xl font-bold">Shop groceries on instamart</p>
        <div className="w-[80%] cotainer mx-auto flex flex-nowrap overflow-x-auto mt-20 gap-4">
                      {
                        imageGridCards.map((foodVeg)=><VegCard key={foodVeg.id} foodVeg={foodVeg}></VegCard>)
                      }
        </div>
    </div>
    )
}