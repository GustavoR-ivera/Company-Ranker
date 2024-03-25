import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

import NavBar from "./components/navBar/NavBar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";


function App() {

  //ejemplo de datos de usuario
  let user = {
    id: false,
    name: "user x"
  }

  // plantilla para usar las diferentes barras de navegacion en diferentes paginas
  function Layout() {
  return (
    <div>
      <NavBar />
      <div style={{display:"flex"}}>
        <LeftBar />
        {/*componente comodin*/}
        <Outlet />
        <RightBar />
      </div>
    </div>
    );
  }

  //validacion de usuario para rutas protegidas
  function ProtectedRoute({children}){
    if(user.id){
      return children;
    }else{
      return <Navigate to="/login" />
    }
  }

  const router = createBrowserRouter([

    //pagina principal
    {
      path: "/",
      element: <h1>welcome, sign up for more</h1>, 
    },
    //rutas que no utilizan la plantilla de barras de navegacion
    {
      path: "/login",
      element: <h1>login</h1>,
    },
    {
      path: "/register",
      element: <h1>register</h1>,
    },
    
    //rutas protegidas que usan la plantilla de barras de navegacion
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        //direccion al home de un usuario especifico 
        {
          path: "/home/:id",
          element: <h1>welcome, user x</h1>,
        },
        //direccion al perfil de un usuario especifico
        {
          path: "/profile/:id",
          element: <h1>profile for user x</h1>,
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;