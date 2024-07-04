import { Link } from "react-router-dom"
import { ItemData } from "../../Sales-ItemData/Data"
import { currencyFormatter } from "../../Util/formattert"
const EventSales = () => {
    return(
       <>
            <div className=" flex flex-col mt-4 mb-9 justify-center items-center">
                <h1 className=" text-[85px] font-serif font-bold leading-tight">All Items!</h1>
                <p className=" font-semibold text-xl font-serif ">
                    All Items are sale up to <span className=" text-green-600">20%,</span> Get your's now!
                </p>

                
            </div>
       
            <div className=" mx-2">
                <ul className=" grid grid-rows-4 grid-flow-col gap-5 ">
                    {ItemData.map((item, key) => (
                        <li key={key.id} className=" border bg-gray-900 text-stone-200 rounded-lg">
                            <Link className=" flex justify-center items-center mt-5">
                                <img src={item.img} alt={item.description} className=" rounded-md w-[18rem]"/>
                            </Link>
                            <div className=" mx-1  ">
                                <h1 className=" text-3xl font-bold my-2">{item.name}</h1>
                                <p className=" font-semibold leading-snug">{currencyFormatter.format(item.price)}</p>

                            </div>

                            <div className=" flex flex-col justify-items-start items-start my-3">
                                <button>Add to Cart</button>
                                <button>Buy</button>
                               
                            </div>
                        </li>
                        
                    ))}
                </ul>

            </div>
       </>

        
    )

}

export default EventSales

