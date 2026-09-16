import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){
    return(
        <div className="w-[80%] cotainer mx-auto mt-20">
            <p className="text-4xl font-bold">Order our best food options</p>
         <div className="w-[80%] cotainer mx-auto flex flex-nowrap overflow-x-auto mt-20 gap-4">
              {
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
              }
         </div>
        </div>
        
    )
}