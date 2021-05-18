import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/Image.css";
import ImageZoom from 'react-medium-image-zoom'
import {useState, useEffect} from "react";
import {app} from "../firebase/config";
const db = app.firestore();


function Image(){ 

    
    let {id} = useParams();
    const [user,setUser] = useState(null);
    const [band ,setBand] = useState(false);
 

    const getProductsFromDB = async () =>{
        const docRef = await db.collection("images").doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setUser(doc.data());
                setBand(true);
            } else {

                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
                          
    }

    useEffect(() => {
        getProductsFromDB();
    },[id]);
   

    return(<>
    <meta content="initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0,width=device-width" name="viewport">
    { 
            band ? 
    <>
    <NavBar />
    <div className="flexor">
    <ImageZoom
        image={{
          src: user.url,
          alt: id,
          className: 'img',
          style: { width: '41%' }
        }}
        zoomImage={{
          src: user.url,
          alt: id,
        }}
      />
    </div>
    </> :
    <div>
        
    </div>
    }
 
    
   
    </>)
}

export default Image;
