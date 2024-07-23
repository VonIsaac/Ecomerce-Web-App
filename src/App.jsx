import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Events from "./Components/Events"
import EventSales from "./Components/Sales-Components/EventSales"
import EventDetails from "./Components/Sales-Components/EventDetails"
import { QueryClientProvider } from "@tanstack/react-query";
import {queryClient} from './Util/http'

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
      
    </>
  )
}

export default App
