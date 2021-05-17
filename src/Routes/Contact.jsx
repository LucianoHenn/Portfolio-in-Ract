import NavBar from "../components/NavBar";
import "../styles/Contact.css";
import {Link} from "react-router-dom";
import { useState, useContext} from "react";
import {Context} from "../Context";

function Contact() {

    const [isActive, setActive] = useContext(Context);

    return(
        <>
        <NavBar />
        <div className="fondo-div">
        <img className="fondo" src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/_B0A1243%20(1).jpg?alt=media&token=519e6e81-d143-4ea8-a5b8-cc39f348a615" alt=""/>
        </div>
        <div className="contacto">
        <h3 className="contact">Contact</h3>
        <form className={`deja-tu-mensaje ${isActive ? "toggle" : ""}`} action="">
            <div>
                <label>Email Address</label>
               <p>candelariacarretero@gmail.com</p>
            </div>
            <div>
                <label>Phone Number</label>
               <p>+5493513116039</p>
            </div>
            <div>
                <label>Instagram</label>
             <a target="_blank" href="https://www.instagram.com/candelariacarretero/">@candelariacarretero</a>
            </div>
            <div>
                <label>Location</label>
               <p>Córdoba, Argentina</p>
            </div>
        </form>
        </div>
   
        </>
    )
   
}

export default Contact;