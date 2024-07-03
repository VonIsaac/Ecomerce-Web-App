
import EventFrontPage from "./EventFrontPage"
import Header from "./Header"

const Events = () => {

    return( 
        <>
            <Header>
                <h1 className=" text-3xl font-bold font-sans leading-snug text-stone-400">
                    ShopNexus
                </h1>
                
            </Header>        
            <main>
                <EventFrontPage />
            </main>
        </>
    )
}

export default Events