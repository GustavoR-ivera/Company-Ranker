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
import PrincipalPage from "./pages/principal_page/PrincipalPage.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";

function App() {

  //ejemplo de datos de usuario
  let user = {
    id: 123,
    name: "User X",
    session: false
  }

  //arreglo de busquedas recientes
  let lastestSearches = [
    "Alkosto", 
    "Exito"];

  // plantilla para usar las diferentes barras de navegacion en diferentes paginas
  function Layout() {
  return (
    <div>
      {/*enviamos user como parametro a navbar*/}
      <NavBar user = {user}/>

      <div style={{display:"flex"}}>
        <LeftBar />
        {/*componente comodin*/}
        <div style={{flex:8}}>
          <Outlet />
        </div>
        <RightBar user={user} searches = {lastestSearches}/>
      </div>
    </div>
    );
  }

  //validacion de usuario para rutas protegidas
  function ProtectedRoute({children}){
    if(user.session){
      return children;
    }else{
      return <Navigate to="/login" />
    }
  }

  const router = createBrowserRouter([

    //pagina principal (no hay sesion de usuario)
    {
      path: "/",
      element: <PrincipalPage 
                  user={user} 
                  searches = {lastestSearches}/>, 
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
    {
      path: "/about",
      element: <About user={user} />,
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
          element: <Home />,
        },
        //direccion al perfil de un usuario especifico
        {
          path: "/profile/:id",
          element: <h3>profile for user x</h3>,
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