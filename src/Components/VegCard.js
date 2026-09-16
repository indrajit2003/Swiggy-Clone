export default function VegCard({foodVeg}){
    return(
        <div className="flex-none">
        <a href={foodVeg?.action?.link}>
            <img className="h-50 w-40 object-cover transition-transform duration-300 hover:scale-105 shadow-2xl rounded-2xl border border-white" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodVeg?.imageId}></img>
            <h1 className="text-xl font-semibold items-center">{foodVeg?.action?.text}</h1>
        </a>
        </div>
    )
}