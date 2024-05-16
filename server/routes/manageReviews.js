//rutas asociadas a la entidad moderador
import express  from "express";
import { 
    getPendingCustomerReviews, 
    acceptCustomerReview,
    rejectCustomerReview,
    linkCompanyCustomerReview,
    getPendingJobReviews,
    acceptJobReview,
    rejectJobReview,
    linkCompanyJobReview
} from "../controllers/manageReviewsControllers.js";

const router = express.Router()

//home page de la seccion gestionar reseñas de productos, lista las reseñas pendientes
router.get("/manage-customer-reviews", getPendingCustomerReviews);
//ruta invocada al accionar la opcion "aceptar reseña" 
router.get("/accept-customer-review/:idReview/:comments", acceptCustomerReview);
//ruta invocada al accionar la opcion "rechazar reseña" 
router.get("/reject-customer-review/:idReview/:comments", rejectCustomerReview);
//ruta invocada al accionar opcion "vincular empresa"
router.get("/link-company-creview/:idReview/:idCompany", linkCompanyCustomerReview);

//home page de la seccion gestionar reseñas laborales, lista las reseñas pendientes
router.get("/manage-job-reviews", getPendingJobReviews);
//ruta invocada al accionar la opcion "aceptar reseña" 
router.get("/accept-job-review/:idReview/:comments", acceptJobReview);
//ruta invocada al accionar la opcion "rechazar reseña" 
router.get("/reject-job-review/:idReview/:comments", rejectJobReview);
//ruta invocada al accionar opcion "vincular empresa"
router.get("/link-company-jreview/:idReview/:idCompany", linkCompanyJobReview);


export default router;