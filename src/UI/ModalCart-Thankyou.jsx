import { Link } from "react-router-dom"
import { createPortal } from "react-dom"
import { useRef, forwardRef, useImperativeHandle } from "react"
const ModalThankyou = forwardRef((props, ref) => {
    const thanksModal = useRef(); 
     
    useImperativeHandle(ref, () =>{
        return{
         open(){
            thanksModal.current.showModal();
         }
        }
     })

    return createPortal(
        <dialog ref={thanksModal} className="  border-solid p-3 bg-neutral-500 w-[45%] h-[35%] rounded-lg backdrop:bg-stone-900/90">
            <div className=" flex flex-col justify-center items-center h-4/5">
                <h1 className=" text-center text-3xl my-1 font-bold ">Thank You for Your Purchase!</h1>
                <p className=" text-center font-semibold my-1 text-slate-950">
                    We appreciate your business and hope you enjoy your new item.
                    If you have any questions, feel free to reach out to our support team.
                </p>
                <Link to={'../'} className=" my-2 flex justify-center w-11 items-center bg-slate-900 text-gray-300 px-2 py-1 font-semibold rounded-lg ">Okay</Link>
            </div>
        </dialog>,
        document.getElementById('modal-cart-thankyou')
    )
})

export default ModalThankyou