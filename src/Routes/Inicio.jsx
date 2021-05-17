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
           setImages(imagesCollection.docs.map(doc => {
               return doc.data()
               
           }))
           setBand(true);
        }
        fetchUsers()
       
    }, [])

    let history = useHistory();
    
    function handleClick(e) {
        history.push(`/image`)
      }

    console.log(images); 

    let col1 =  [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];
    let j = 0 ;
    for(let i=0;i<images.length;i++){
        const linkk="/image/"+images[i].name;
            switch(j){
                case 0:
                    col5.push(<Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link>)
                    break;
                case 1:
                    col4.push(<Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`}src={images[i].url} alt={images[0].name}/></Link>)
                    break;
                case 2:
                    col3.push(<Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link>)
                    break;
                case 3:
                    col2.push(<Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link>)
                    break;
                case 4:
                    col1.push(<Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link>)
                    break;
            }
        j++;
        if(j===5)
        j=0;
    }




    return(
        <>
    { 
            band ? 
    <>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
       <NavBar />
       <div class="row"> 
  <div class="column">
    {col5}
  </div>
  <div class="column">
   {col4}
  </div>  
  <div class="column">
    {col3}
  </div>
  <div class="column">
  {col2}
  </div>
  <div class="column">
  {col1}
  </div>
</div>
      
        </> :
    <div>
        
    </div>
    }


        </>
    )
}

export default Inicio;