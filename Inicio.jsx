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
    let rows=[];
    let col1 =  [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];
    let j = 0 ;
    let row=1;
    for(let i=0;i<images.length;i++){
        const linkk="/image/"+images[i].name;
            switch(j){
                case 0:
                    col5.push(<div class="column"><Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link></div>)
                    break;
                case 1:
                    col4.push(<div class="column"><Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`}src={images[i].url} alt={images[0].name}/></Link></div>)
                    break;
                case 2:
                    col3.push(<div class="column"><Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link></div>)
                    break;
                case 3:
                    col2.push(<div class="column"><Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link></div>)
                    break;
                case 4:
                    col1.push(<div class="column"><Link to={linkk}><img className={`imagen ${isActive ? "toggle" : ""}`} src={images[i].url} alt={images[0].name}/></Link></div>)
                    break;
            }
        j++;
        if(j===5){
            j=0;
            rows.push(col1.concat(col2).concat(col3).concat(col4).concat(col5));
            col1=[];
            col2=[];
            col3=[];
            col4=[];
            col5=[];
        }
          console.log(rows);
        
    }








    return(
        <>
    { 
            band ? 
    <>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
       <NavBar />
        <div id="gallery">
       {images.map(
                image => {
                    const linkk="/image/"+image.name;
                    var divStyle = {
                        backgroundImage: 'url(' + image.url + ')',
                        width: '300px'
                      };
                    return <Link to={linkk}  style={divStyle}></Link>
       })}
        </div>
        </> :
    <div>
        
    </div>
    }


        </>
    )
}

export default Inicio;