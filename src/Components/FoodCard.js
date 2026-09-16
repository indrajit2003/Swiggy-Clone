
export default function FoodCard({foodData}){
    return(
        <div className="flex-none">
         <a href={foodData?.action.link}>
            <img className="h-50 w-40 object-cover transition-transform duration-300 hover:scale-105 shadow-2xl rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
         </a>
        </div>
    )
}