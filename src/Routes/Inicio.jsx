import "../styles/Inicio.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import {NavLink, useHistory} from "react-router-dom";
import ReactDOM from "react-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState, useContext} from "react";
import {app} from "../firebase/config";
import {Context} from "../Context";
const db = app.firestore()


function Inicio(){
    
    const [isActive, setActive] = useContext(Context);

    const [images, setImages] = useState([]);
    const [band ,setBand] = useState(false);

    useEffect(() => {
        const fetchUsers = async () =>{
           const imagesCollection = await db.collection("images").orderBy("createdAt", "desc").get()
           setBand(true);
           setImages(imagesCollection.docs.map(doc => {
               return doc.data()
               
           }))
        }
        fetchUsers()
    }, [])

    let history = useHistory();
    
    function handleClick(e) {
        history.push(`/image`)
      }

    return(
        <>
    { 
            band ? 
    <>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
       <NavBar />
      
            <ul className="imagenes">
            {images.map(
                image => {
                    const linkk="/image/"+image.name;
                    return <li key={image.name}>
                      <Link to={linkk}><img  className={`imagen ${isActive ? "toggle" : ""}`} src={image.url} alt={image.name}/></Link>  
                    </li>
                }
            )}
        </ul>
        </> :
    <div>
        
    </div>
    }


        </>
    )
}

export default Inicio;