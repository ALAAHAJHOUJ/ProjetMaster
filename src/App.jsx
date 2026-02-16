import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Acceuil from "./pages/Acceuil"
import NotFound from "./components/NotFound"
import Recette from "./components/Recette"
import RecetteDetails from "./pages/recetteDetails"




const Routes=createBrowserRouter([
  {
    path:"/",
    element:<Acceuil></Acceuil>
  },
  {
    path:"/:id/Details",
    element:<RecetteDetails></RecetteDetails>
  }
  ,{
    path:"*",
    element:<NotFound></NotFound>
  }
])

function App() {


  return (
    <>
      <RouterProvider router={Routes}>

      </RouterProvider>
    </>
  )
}

export default App
