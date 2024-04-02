import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/navBar/NavBar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";
import PrincipalPage from "./pages/principal_page/PrincipalPage.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext.js";

function App() {
  const { currentUser } = useContext(AuthContext);
  let session = true;

  // plantilla para usar las diferentes barras de navegacion en diferentes paginas
  function Layout() {
    return (
      <div>
        {/*enviamos user como parametro a navbar*/}
        <NavBar />

        <div style={{ display: "flex" }}>
          <LeftBar />
          {/*componente comodin*/}
          <div style={{ flex: 8 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  }

  //validacion de usuario para rutas protegidas
  function ProtectedRoute({ children }) {
    if (session) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }

  const router = createBrowserRouter([
    //pagina principal (no hay sesion de usuario)
    {
      path: "/",
      element: <PrincipalPage />,
    },
    //rutas que no utilizan la plantilla de barras de navegacion
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/about",
      element: <About />,
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
          path: "/home",
          element: <Home />,
        },
        //direccion al perfil de un usuario especifico
        {
          path: "/profile",
          element: <h3>profile for user x</h3>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
