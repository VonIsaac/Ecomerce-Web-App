import { Link } from "react-router-dom";


const EventFrontPage = ( ) => {

    return(


        <div className="flex justify-center items-center h-screen font-serif" id="bg-frontpage"> 
            <div className=" flex flex-col justify-center  items-center text-center">
                <h1 className=" text-6xl text-slate-950 font-extrabold leading-tight ">Welcome to ShopNexus</h1>
                <p className=" text-stone-100 font-medium leading-tight my-4 text-xl ">
                    Welcome to ShopNexus, your ultimate destination for all your shopping needs. <br />
                    Browse through our extensive collection and find what you love.
                </p>
                <Link to= '/events/product' className=" bg-slate-950 text-slate-100  px-4 py-2 font-medium rounded-md hover:bg-slate-300 hover:text-neutral-950">
                    Discover
                </Link>
            </div>
        </div>

        
    )


};


export default EventFrontPage