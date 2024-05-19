import NavBar from '../../components/navBar/NavBar'
import Footer from "../../components/footer/Footer.jsx";
import './value_proposal.scss'

function Value_proposal() {
    return(
        <div className="value_proposal">
            <NavBar />
            <div className="container">
            <div className="item">
            <span>Propuesta de Valor</span>
            <p>
            Company Ranker es una de las páginas web predilectas en cuanto a opinión del mercado laboral y comercial colombiano. Somos la opción indicada para que las personas encuentren información verificada y de calidad sobre el producto que desean comprar o sobre la empresa en la que desean trabajar.  
            </p>

            <p>
            En company Ranker ofrecemos información de calidad, veraz y confiable de la experiencia de trabajadores y compradores en el mercado laboral colombiano.
            </p>
            </div>
            </div>
            < Footer />
        </div>
    )

}

export default Value_proposal;