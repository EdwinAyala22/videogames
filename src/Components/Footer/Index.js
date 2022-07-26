import React from 'react';
import logoNav from '../Assets/img/logoNav.jpg';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import './footer.css';

const FooterApp = () => {
    return (
        <div className="footer">
            <div className="row d-flex justify-content-center align-items-center m-0 bg-dark text-white p-2 row-cols-md-3 row-cols-sm-1">
                <div className="d-flex justify-content-center align-items-center p-2">
                    <img
                        src={logoNav}
                        width="200"
                        height="200"
                        className="p-2 navLogo"
                        alt="React Bootstrap logo"
                    />
                </div>
                <div className="text-center p-2">
                    <h5 className="mt-2 mb-2">Edwin Sebastian Ayala</h5>
                    <h5 className="mt-2 mb-2">Cel: 315-354-2819</h5>
                    <h5 className="mt-2 mb-2">Correo: esayala86@misena.edu.co</h5>
                </div>
                <div className="d-flex justify-content-center align-items-center p-2">
                    <a href="" className="l-image m-1"><BsFacebook size={25} className="image m-3" /></a>
                    <a href="" className="l-image m-1"><BsInstagram size={25} className="image m-3" /></a>
                    <a href="" className="l-image m-1"><BsTwitter size={25} className="image m-3" /></a>
                    <a href="" className="l-image m-1"><BsGithub size={25} className="image m-3" /></a>
                </div>
            </div>
            <div className="row line-footer m-0 p-3 text-center text-white">
                <small> © 2022 <b>Edwin Ayala</b> - Todos los Derechos Reservados</small>
            </div>
        </div>
    )
}

export default FooterApp