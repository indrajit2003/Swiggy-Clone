import { dineoutRestaurants } from "../Utils/dineData";
import DineCard from "./DineCards";

export default function Dine(){
    return(
        <div className="w-[80%] cotainer mx-auto mt-20">
                <p className="text-4xl font-bold">Discover best restaurants on Dineout</p>
                 
                 <div className="flex flex-nowrap overflow-x-auto mt-20 gap-4 mb-20">
                      {
                        dineoutRestaurants.map((restaurants)=><DineCard key={restaurants.info.id} restaurants={restaurants}></DineCard>)
                      }
                 </div>
        </div>
    )
}