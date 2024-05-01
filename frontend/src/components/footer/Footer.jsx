import "./footer.scss";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="/about">Sobre nosotros</a>
        <a href="#">Contáctanos</a>
      </div>
      <div className="social-media">
        <a href="https://x.com/CompanyRanker?s=20" target="_blank">
          <XIcon />
        </a>
        <a href="https://www.instagram.com/companyranker/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="#">
          <EmailIcon />
        </a>
        <span>companyrankerweb@gmail.com</span>
      </div>
    </footer>
  );
}

export default Footer;
