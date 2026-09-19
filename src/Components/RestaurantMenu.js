import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import RestaurantMenuCard from "./RestaurantMenuCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function RestaurantMenu(){
     
    const {id} = useParams();
    const [RestData,setRestData] = useState([]);
    const [selected,setSelected] = useState(null);
    
   useEffect(()=>{
        async function fetchData(){
            const swiggyAPI = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${id}`;
            const response = await fetch(swiggyAPI);
            const data =await response.json();
            const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items)=>'title' in items?.card?.card)
            setRestData(filterData);
        }
        fetchData();

    },[id])

    if(RestData.length==0){
        return(
            <Shimmer></Shimmer>
        )
    }
     return(
        <div>
              <div className="w-[80%] mt-15 mb-5 ml-40">
               <Link to={`/city/goa/${id}/search`}>
                <p className="w-full text-xl font-semibold text-center py-4 bg-gray-200 rounded-4xl">Search for Dishes</p>
                </Link>
              </div>
              <div className="w-[80%] mt-15 mb-5 ml-40">
              <button className={`text-2xl py-2 px-8 mr-2 border rounded-2xl ${selected==="veg"? "bg-green-600":"bg-gray-300"} `} onClick={()=>setSelected(selected==='veg' ? null:'veg')}>Veg</button>
              <button className={`text-2xl py-2 px-8 border rounded-2xl ${selected==="nonveg" ? "bg-red-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg' ? null:'nonveg')} >Non veg</button>
              </div>

         <div className="w-[80%] mx-auto mt-15" >
            {
                RestData.map((menuItems)=><RestaurantMenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></RestaurantMenuCard>)
            }
         </div>
        </div>
     )
}