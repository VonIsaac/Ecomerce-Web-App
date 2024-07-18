import { forwardRef, useImperativeHandle, useRef} from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { currencyFormatter } from "../Util/formattert"
import  { ItemAddtoCartAction } from "../store/item-addToCart-slice"

const ModalAddToCart = forwardRef(({children, onClose}, ref) => {
    const cartModal = useRef()
    const dispatch = useDispatch()

    const handleIncrement = (id) => {
        dispatch(ItemAddtoCartAction.incrementPrice({id}))
    }

    const handleDecrement = (id) => {
        dispatch(ItemAddtoCartAction.decrementPrice({id}))
    }
    
    const cartItem = useSelector(cart => cart.cartItems.cartItem)

    useImperativeHandle(ref, () =>{
       return{
        open(){
            cartModal.current.showModal()
        }
       }
    })


       

    return createPortal(
        <dialog ref={cartModal} onClose={onClose} className="  border-solid p-3 bg-neutral-500 w-[45%] h-[60%] rounded-lg backdrop:bg-stone-900/90">
            <ul>
                {cartItem.map((cart) => (
                    <li key={cart.id} className=" border-b-2 border-black flex flex-col justify-center items-center ">
                        <h1>{cart.quantity}</h1>
                        <img src={cart.img} alt={cart.name} className=" w-[60px] rounded-md"/>
                        <p className=" my-2 font-bold text-3xl">{cart.name}</p>
                        <div className=" flex justify-center items-center gap-3 text-xl mb-2">
                            <button onClick={() => handleDecrement(cart.id)} className=" font-extrabold">-</button>    
                            <p className=" font-semibold">{currencyFormatter.format(cart.price)}</p>
                            <button onClick={()=> handleIncrement(cart.id)} className=" font-extrabold">+</button>
                        </div>  
                        <p className=" font-semibold text-lg mb-2">{cart.description}</p>
                    </li>
                ))}
            </ul>
            {children}
        </dialog>,
         document.getElementById('modal-add-to-cart')
    )
} )

export default ModalAddToCart