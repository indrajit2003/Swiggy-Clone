import { Link } from "react-router-dom";

export default function RestaurantCard({restInfo}){
    return(
        <Link to={"/city/goa/"+restInfo?.info?.id}>
          <div className="max-w-[280px] mb-2 transition-transform duration-200 hover:scale-95 rounded-xl">
            <img className="h-50 w-90 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
            <div className="w-[90%] mx-auto mt-3">
                <div className="text-xl font-bold">{restInfo?.info?.name}</div>
                <span className="text-lg flex items-center gap-2">
                   <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">★</span>
                   <span>{restInfo?.info?.avgRating}</span>
                   <span className="font-semibold">{restInfo?.info?.sla?.slaString}</span>
                </span>
                <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
            </div>
         </div>
        </Link>
    )
}