import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Restaurant(){
    
    const [RestData,setRestData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const swiggyAPI = "https://foodfire.onrender.com/api/restaurants";
            const response = await fetch(swiggyAPI);
            const data =await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();

    },[])

    //shimmer Effect
   if(RestData.length==0)
      return (<Shimmer></Shimmer>);
   return(
      <div>
         <p className="text-2xl font-bold mt-20 ml-45">Top Restaurants chain in Goa</p>
         <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
         {
            RestData.map((restInfo)=><RestaurantCard key={restInfo.info.id} restInfo={restInfo}></RestaurantCard>)
         }
         </div>
      </div>
   )
}

export default Restaurant;