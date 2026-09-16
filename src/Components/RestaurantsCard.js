export default function RestaurantsCard({restaurants}){
   return(
    <div className="max-w-sm flex-none">
         <div className="relative"> 
           <img className="w-80 h-50 object-cover transition-transform duration-300 hover:scale-105 shadow-2xl rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurants?.info?.mediaFiles[0]?.url}></img>
           <p className=" absolute bottom-2 left-2 text-white text-2xl font-bold z-10">{restaurants?.info?.name}</p>
           <p className=" absolute bottom-2 right-2 text-white text-2xl font-bold z-10">{restaurants?.info?.rating?.value}</p>
           <div className="absolute bg-gradient-to-t from-black to-transparent h-16 bottom-0 left-0 right-0"></div>
        </div>
    </div>
   )
}