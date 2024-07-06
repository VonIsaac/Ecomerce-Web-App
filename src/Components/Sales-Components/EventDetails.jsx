import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemData } from "../../Sales-ItemData/Data";
import { currencyFormatter } from "../../Util/formattert";
import { Link } from "react-router-dom";
const EventDetails = () => {
    const { id } = useParams()
    const [data, setIsData ] = useState(null)
   

    useEffect(() => {
        const fetchDataItem = ItemData.find((items) => items.id === id)
        setIsData(fetchDataItem)
    }, [id]);

    if (!data) {
        return <div>Item not found</div>; 
    }

    


    return(
        <div>
            <div className=" flex justify-evenly items-center my-6">
                <h1 className=" uppercase font-bold text-3xl">{data.name} is one of most Unique Item</h1>
                <Link to= '/events/product' className=" bg-slate-900 text-zinc-300 px-3 py-2 font-semibold rounded-md">
                    View all Items!
                </Link>
            </div>

            <div className=" flex flex-col justify-center items-center h-screen">

                <div className=" grid grid-rows-2 grid-flow-col gap-5 my-5 mt-[150px] ">
                    <button className=" bg-stone-900 text-gray-300 font-semibold py-1 rounded-md">Buy Now</button>
                    <button className=" bg-stone-900 text-gray-300 font-semibold py-1 px-2 rounded-md">Add To Cart</button>
                    <button className=" bg-stone-900 text-gray-300 font-semibold py-1 rounded-md">Edit Item</button>
                    <button className=" bg-stone-900 text-gray-300 font-semibold py-1 px-2 rounded-md">Delete Item</button>
                </div>

                <div className=" mt-[20px]  p-5 bg-stone-900 rounded-md">
                   <div className=" flex justify-center items-center">
                    <img src={data.img} alt={data.name} className="w-[30rem] rounded"/>
                   </div>
                    <h1 className=" text-stone-300 font-extrabold text-2xl">{data.name}</h1>
                    <p className=" font-semibold text-stone-300">{currencyFormatter.format(data.price)}</p>
                    <p className=" font-semibold text-stone-300 text-xl">{data.description}</p>
                </div>

               
            </div>
        </div>
    )
}
export default EventDetails


/*import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemData } from "../../Sales-ItemData/Data";

const EventDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        console.log("ID from params:", id); // Debugging line
        const fetchedItem = ItemData.find((item) => item.id === id);
        console.log("Fetched Item:", fetchedItem); // Debugging line
        setItem(fetchedItem);
    }, [id]);

    if (!item) {
        return <div>Item not found</div>; // Fallback UI
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name} />
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    );
};

export default EventDetails;*/
