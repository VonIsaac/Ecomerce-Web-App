import { createPortal } from "react-dom"
import { forwardRef,useImperativeHandle,useRef } from "react"
import { useSelector } from "react-redux"
import { currencyFormatter } from "../Util/formattert"
import { GoX } from "react-icons/go";

const Modal = forwardRef(({onClose}, ref) => {
    const dialog = useRef()
    const dataItem = useSelector((myItem) => myItem.item.items)
    

    useImperativeHandle(ref, () =>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    });

    
    
    return createPortal(
        <dialog ref={dialog} onClose={onClose} className="  border-solid p-3 bg-neutral-500 w-[45%] h-[60%] rounded-lg backdrop:bg-stone-900/90">
           <form method="dialog" className="">
                <button className=" text-2xl my-5 px-3 py-1 font-medium rounded-md">
                    <GoX />
                </button>
            </form>
            
            <ul >
                {dataItem.map((items) => (
                    <li className=" border-b-2 border-black flex flex-col justify-center items-center " key={items.id}>
                        <h1 className=" my-3 text-xl font-bold">Quantity:{items.quantity}</h1>
                        <img src={items.img} alt={items.name} className=" w-[55px] rounded-md mb-2"  />
                        <h1 className=" mb-1 font-extrabold text-2xl">{items.name}</h1>
                        <p className=" text-lg font-medium">{currencyFormatter.format(items.price)}</p>
                        <p className=" font-medium text-lg mb-4">{items.description}</p>
                    </li>
                ))}
            </ul>
            
        </dialog>,
        document.getElementById("modal-buy-item")
    )
});

export default Modal

{/*<form method="dialog" className=" flex justify-center items-center">
                <button className=" bg-slate-900 text-gray-400 my-5 px-3 py-1 font-medium rounded-md">Close</button>
            </form> */}