//rutas asociadas a la entidad moderador
import express  from "express";
import { 
    getPendingCustomerReviews, 
    acceptCustomerReview,
    rejectCustomerReview,
    getPendingJobReviews,
    acceptJobReview,
    rejectJobReview
} from "../controllers/manageReviewsControllers.js";

const router = express.Router()

//home page de la seccion gestionar reseñas de productos, lista las reseñas pendientes
router.get("/manage-customer-reviews", getPendingCustomerReviews);
//ruta invocada al accionar la opcion "aceptar reseña" 
router.get("/accept-customer-review", acceptCustomerReview);
//ruta invocada al accionar la opcion "rechazar reseña" 
router.get("/reject-customer-review", rejectCustomerReview);

//home page de la seccion gestionar reseñas laborales, lista las reseñas pendientes
router.get("/manage-job-reviews", getPendingJobReviews);
//ruta invocada al accionar la opcion "aceptar reseña" 
router.get("/accept-job-review", acceptJobReview);
//ruta invocada al accionar la opcion "rechazar reseña" 
router.get("/reject-job-review", rejectJobReview);


export default router