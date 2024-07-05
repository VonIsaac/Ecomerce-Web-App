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
            <div className=" flex justify-evenly items-center my-5">
                <h1 className=" uppercase font-bold text-3xl">{data.name} is one of most Unique Item</h1>
                <Link to= '/events/product'>
                    View all Items!
                </Link>
            </div>

            <div className=" flex flex-col justify-center items-center h-screen">
                <div className="  p-5 bg-stone-900">
                   <div className=" flex justify-center items-center">
                    <img src={data.img} alt={data.name} className="w-[30rem]"/>
                   </div>
                    <h1>{data.name}</h1>
                    <p>{currencyFormatter.format(data.price)}</p>
                    <p>{data.description}</p>
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
