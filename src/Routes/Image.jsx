import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/Image.css";
import ReactMediumImg from 'react-medium-zoom';
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
    { 
            band ? 
    <>
    <NavBar />
    <div className="flexor">
    <ReactMediumImg
        className="photo"
        src={user.url}
        alt={id}
        onOpen={() => console.log('Image Open')}
        onClosed={() => console.log('Image closed')}
        
      />
    </div>
    </> :
    <div>
        
    </div>
    }
 
    
   
    </>)
}

export default Image;