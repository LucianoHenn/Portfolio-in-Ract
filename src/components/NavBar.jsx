import {NavLink} from "react-router-dom";
import {useState, useContext} from "react";
import {Context} from "../Context";

function NavBar(){

    const [isActive, setActive] = useContext(Context);

    const handelClick = () => {
      setActive(!isActive);
      console.log(isActive);
    }

    return(
        <>
        <div className="contenedor">
        
        <div>
            <ul className="navlinks">
               <NavLink to="/" className="links home"><li>Home</li></NavLink> 
               <NavLink to="/work" activeClassName='active' className="links"><li>Work</li></NavLink> 
                <NavLink to="/contact" activeClassName='active'className="links"><li>Contact</li></NavLink>

            </ul>
        </div>
        <div>
            <NavLink to="/work">
            <h3 id="cande">candelaria</h3>
            </NavLink>
        </div>
        {/* <div className="ig">
            <a target="_blank" href="https://www.instagram.com/bycande___/?igshid=175lcssipfm5w">
            <img src="https://cdn.icon-icons.com/icons2/1558/PNG/512/353424-instagram-logo_107474.png" alt=""/>
            </a>
           

        </div> */}
        <div className="burger">
            <img className="burger" onClick={handelClick} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt=""/>
        </div>
    
    </div>
    <div className={isActive ? "hamburguesas" : "hamburguesa"}>
            <img className="cruz" onClick={handelClick} src="https://icons-for-free.com/iconfiles/png/512/close+cross+delete+exit+remove+icon-1320085939816384527.png" alt=""/>
            
            <ul>
               <NavLink onClick={handelClick} to="/" activeClassName='active' className="links"><li>Home</li></NavLink> 
               <NavLink onClick={handelClick} to="/work" activeClassName='active' className="links"><li>Work</li></NavLink> 
                <NavLink onClick={handelClick} to="/contact" activeClassName='active'className="links"><li>Contact</li></NavLink>
                <li>
                <a className="links instagrami" target="_blank" href="https://www.instagram.com/candelariacarretero/">INSTAGRAM</a>
                </li>
                
                
               
            </ul>
    </div>
    
    </>
    )
}

export default NavBar;
