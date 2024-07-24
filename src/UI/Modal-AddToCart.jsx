import { forwardRef, useImperativeHandle, useRef} from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { currencyFormatter } from "../Util/formattert"
import  { ItemAddtoCartAction } from "../store/item-addToCart-slice"
import { useMutation } from "@tanstack/react-query"
import { handleAddToCart, handleDeleteItem, queryClient } from "../Util/http"
import ModalThankyou from "./ModalCart-Thankyou"
import { GoX } from "react-icons/go";
import { useParams } from "react-router-dom"
const ModalAddToCart = forwardRef(({children, onClose}, ref) => {
    {/*For Fetching Cart */}
    const thanksModal = useRef()

    const {mutate} = useMutation({
        mutationFn: handleAddToCart,
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            thanksModal.current.open()
        },

    })

    const addToCartData = useSelector(state => state.cartItems)

    const handleAddToCartData = () => {
        mutate(addToCartData) 
        
    }
    {/*--------------- */}


    {/*For Deleting Cart */}
       
        const {mutate: deleteMutate} = useMutation({
            mutationFn: handleDeleteItem,
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['cart'],
                    refetchType: 'none'
                })
            }
        })

        const handleDeleteDataCart = () => {
            deleteMutate(addToCartData)
        }

    {/*--------------- */}
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
        <>
            <ModalThankyou ref={thanksModal}/>
        <dialog ref={cartModal} onClose={onClose} className="  border-solid p-3 bg-neutral-500 w-[45%] h-[60%] rounded-lg backdrop:bg-stone-900/90">
            <button onClick={handleDeleteDataCart}>
                <GoX  />
            </button>
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
            <div className=" flex justify-center items-start">
                <button onClick={handleAddToCartData }  className="  bg-slate-900 text-gray-300 px-2 py-1 font-semibold rounded-lg ">
                    CHECKOUT
                </button>
            </div>
        </dialog>
        </>,
         document.getElementById('modal-add-to-cart')
        
    )
} )

export default ModalAddToCart