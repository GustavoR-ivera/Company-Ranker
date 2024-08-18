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
import My_reviews from "./pages/my_reviews/My_reviews";
import ManageProductReviews from "./pages/manage_product_reviews/ManageProductReviews";
import ManageJobReviews from "./pages/manage_job_reviews/ManageJobReviews";
import JobReviewsPage from "./pages/job_reviews/JobReviewsPage";
import CustomerReviewsPage from "./pages/customer_reviews/CustomerReviewsPage";
import CompanyReviewsPage from "./pages/Companys_reviesw/CompanyReviewsPage.jsx";
import Questions from "./pages/Questions/Questions.jsx";
import Suscription from "./pages/suscription/suscription.jsx"
import { useContext } from "react";
import Recovery from "./pages/recovery/Recovery.jsx";
import { AuthContext } from "./context/authContext.js";
import Error_Form from "./pages/error_form/Error_form.jsx";
import Dashboard from "./pages/dashboard_premium/Dashboard.jsx";
import Value_proposal from "./pages/value_proposal/value_proposal.jsx";
import AccountConfirmation from "./pages/accountConfirmation/accountConfirmation.jsx";

import Tyc from "./pages/tyc/Tyc.jsx";
import UserProfile from "./pages/user_profile/User_profile.jsx";
function App() {
  const { currentUser } = useContext(AuthContext);

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
    if (currentUser) {
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
      path: "/recovery",
      element: <Recovery />,
    },
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
    {
      path: "/Questions",
      element: <Questions />,
    },
    {
      path: "/value",
      element: <Value_proposal />,
    },
    {
      path: "/tyc",
      element: < Tyc/>,
    },
    {
      path: "/accountConfirmation",
      element: < AccountConfirmation />,
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
          path: "/perfil",
          element: <UserProfile />,
        },
        {
          path: "/resenas/mis_resenas",
          element: <My_reviews/>,
        },
        {
          path: "/gestionar_resenas/resenas_productos",
          element: <ManageProductReviews />,
        },
        {
          path: "/gestionar_resenas/resenas_laborales",
          element: < ManageJobReviews />,
        },
        {
          path: "/resenas/resenas_laborales",
          element: < JobReviewsPage/>,
        },
        {
          path: "/resenas/resenas_de_productos",
          element: < CustomerReviewsPage/>,
        },
        {
          path: "/Empresas",
          element: < CompanyReviewsPage/>,
        },
        {
          path: "/Suscripcion",
          element: < Suscription />,
        },
        {
          path: "/registrar_comentario_soporte",
          element: < Error_Form />,
        },
        {
          path: "/dashboard",
          element: < Dashboard />,
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
