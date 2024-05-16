import "./companyReview.scss";
import React, { useEffect, useState } from "react";

const CompanyReview = ({ companyReview }) => {
    const generateStar = (filled) => {
        return (
          <span style={{ color: filled ? "yellow" : "black" }}>
            {filled ? "\u2605" : "\u2606"}
          </span>
        );
    };

    const [companyScore, setCompanyScore] = useState(null);

    useEffect(() => {
        const generateSingleStar = () => {
            const starComponent = generateStar(true); // Monta una estrella llena
            setCompanyScore(starComponent);
        };
        generateSingleStar();
    }, []);

    return (
        <div className="Company-Review-Card">
            <div className="user-info">
                <div className="left">
                    <div className="company">Empresa: {companyReview.Name_C}</div>
                </div> 
                <div className="right">
                    <div className="companyScore">EmpresaScore: {companyReview.Avg_Score}{companyScore}</div>
                </div>                   
            </div>
            <div className="content">
                <div className="description">
                    <p>Descripcion: {companyReview.Description_C}</p>
                </div>
            </div>
            <div className="buttons">
                <button className="agree-button">Reseñas</button>
            </div>
        </div>
    );
};

export default CompanyReview;

