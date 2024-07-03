import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Events from "./Components/Events"
import EventSales from "./Components/Sales-Components/EventSales"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Events />,
  },
  {
    path: '/events/product',
    element: <EventSales />
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
