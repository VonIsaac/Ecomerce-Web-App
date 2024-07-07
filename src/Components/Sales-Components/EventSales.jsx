import { Link } from "react-router-dom"
import { ItemData } from "../../Sales-ItemData/Data"
import { currencyFormatter } from "../../Util/formattert"
import { ItemDataAction } from "../../store/item-slice"
import { useDispatch, useSelector } from "react-redux"
const EventSales = () => {
    const dispatch = useDispatch()

    const buyItemQuantity = useSelector(state => state.item.totalQuantity)
    const handleBuyItem = (item) => {
        dispatch(ItemDataAction.buyItems({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            img: item.img
        }))
    };


    return(
       <>
            <div className=" flex flex-col mt-4 mb-9 justify-center items-center">
            
                <h1 className=" text-[85px] font-serif font-bold leading-tight">All Items!</h1>
                <p className=" font-semibold text-xl font-serif ">
                    All Items are sale up to <span className=" text-green-600">20%,</span> Get your's now! <br />
                    You can Add to Cart, Delete Edit and also Buy this Item
                </p>

            </div>

            <div className=" flex  justify-end items-end">
                    <button className=" bg-stone-900 text-gray-400 m-4 px-2 py-1 font-bold rounded-md">
                        My Buy's Item {buyItemQuantity}
                    </button>
                </div>
       
            <div className=" mx-2">
                <ul className=" grid grid-rows-4 grid-flow-col gap-5 ">
                    {ItemData.map((item, index) => (
                        <li key={item.id} className=" border bg-gray-900 text-stone-200 rounded-lg">
                            <Link to={`/events/product/details/${item.id}`} className=" flex justify-center items-center mt-5">
                                <img src={item.img} alt={item.description} className=" rounded-md w-[18rem]"/>
                            </Link>
                            <div className=" mx-1  ">
                                <h1 className=" text-3xl font-bold my-2">{item.name}</h1>
                                <p className=" font-semibold leading-snug">{currencyFormatter.format(item.price)}</p>

                            </div>

                            <div className=" flex flex-col justify-items-start items-start my-3">
                                <button className=" bg-slate-300 text-stone-900 m-1 px-2  rounded-md font-medium">Add to Cart</button>
                                <button onClick={() => handleBuyItem(item)}  className=" bg-slate-300 text-stone-900 m-1 px-2  rounded-md font-medium">Buy Now</button>
                               
                            </div>

                            
                        </li>
                        
                    ))}
                </ul>

            </div>
       </>

        
    )

}

export default EventSales

