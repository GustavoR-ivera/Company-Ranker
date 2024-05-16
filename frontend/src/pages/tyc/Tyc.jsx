import "./tyc.scss";
import NavBar from "../../components/navBar/NavBar";

const Tyc = () => {
  return (
    <div>
      <NavBar />
      <div className="tyc">

        <div className="container">
          <div className="item">
            <span>Términos y Condiciones de Uso</span>
            <p>
              Estos términos y condiciones de uso ("Términos") rigen el acceso y uso del sitio web “Company Ranker” <a href="https://company-ranker-front.onrender.com">(https://company-ranker-front.onrender.com)</a> y sus servicios relacionados. Al acceder o utilizar el Sitio Web, usted acepta estos Términos en su totalidad. Si no está de acuerdo con estos Términos, por favor abstenerse de utilizar el Sitio Web.{" "}
            </p>

            <span>1. Uso del Sitio Web</span>
            <p>1.1. El Sitio Web ofrece reseñas de empresas y otros contenidos relacionados con sus productos y servicios.</p>
            <p>1.2. Usted acepta utilizar el Sitio Web únicamente con fines legales y de acuerdo con estos Términos, las leyes aplicables y las regulaciones relevantes.</p>
            <p>1.3. No podrá utilizar el Sitio Web de ninguna manera que pueda dañar, deshabilitar, sobrecargar o comprometer la seguridad del Sitio Web, o interferir con el uso de terceros del Sitio Web.</p>
            <span>2. Contenido del Usuario</span>
            <p>2.1. Al enviar reseñas, comentarios u otro contenido ("Contenido del Usuario") al Sitio Web, usted otorga a Company Ranker una licencia mundial, no exclusiva, libre de regalías y transferible para usar, reproducir, modificar, adaptar, publicar, traducir y distribuir dicho Contenido del Usuario en cualquier medio existente o futuro.</p>
            <p>2.2. Usted es el único responsable de cualquier Contenido del Usuario que envíe, y declara y garantiza que tiene todos los derechos necesarios para hacerlo y que dicho Contenido del Usuario no infringe los derechos de propiedad intelectual, derechos de privacidad o cualquier otro derecho de terceros.</p>
            <span>3. Propiedad Intelectual</span>
            <p>3.1. Todos los derechos de propiedad intelectual en el Sitio Web y su contenido son propiedad de Company Ranker o de sus licenciantes.</p>
            <p>3.2. Usted no adquiere ningún derecho de propiedad sobre el contenido al acceder al Sitio Web. Usted puede acceder al contenido solo para su uso personal y no comercial.</p>
            <span>4. Limitación de Responsabilidad</span>
            <p>4.1. El Sitio Web se proporciona "tal cual" y Company Ranker no ofrece garantías de ningún tipo con respecto a su disponibilidad, exactitud, fiabilidad o idoneidad para un propósito particular.</p>
            <p>4.2. Company Ranker no será responsable de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso o la imposibilidad de utilizar el Sitio Web.</p>
            <span>5. Modificaciones</span>
            <p>5.1. Company Ranker se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor al publicarse en el Sitio Web. Se recomienda revisar periódicamente estos Términos para estar al tanto de cualquier cambio.</p>
            <span>6. Ley Aplicable</span>
            <p>6.1. Estos Términos se regirán e interpretarán de acuerdo con las leyes de Colombia, sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>
            <span>7. Contacto</span>
            <p>7.1. Si tiene alguna pregunta sobre estos Términos, puede ponerse en contacto con nosotros en la sección de quejas o reclamos de la página Company Ranker.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tyc;