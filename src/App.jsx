import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Events from "./Components/Events"
import EventSales from "./Components/Sales-Components/EventSales"
import EventDetails from "./Components/Sales-Components/EventDetails"
import Modal from "./UI/Modal"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Events />,
  },
  {
    path: '/events/product',
    element: <EventSales />,
    
      
  },

  {
    path: '/events/product/details/:id',
    element: <EventDetails />
  }

  
])

function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
