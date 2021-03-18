import React, { useEffect } from "react";
import {app} from "../firebase/config";
import {timestamp } from '../firebase/config';
const db = app.firestore()



function Cande(){

    const [fileUrl, setFileUrl] = React.useState(null);
    const [users, setUsers] = React.useState([]);
  
    const onFileChange = async (e) => {
      const file = e.target.files[0];
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      setFileUrl(await fileRef.getDownloadURL());
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        if (!username || !fileUrl) {
          return;
        }
        await db.collection("users").doc(username).set({
          name: username,
          avatar: fileUrl,
          date: timestamp(),
        });
      };
        

    useEffect(() => {
        const fetchUsers = async () => {
          const usersCollection = await db.collection("users").get();
          setUsers(
            usersCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchUsers();
      }, []);

     function HandelClick(e){
         e.stopPropagation();
         const id= (e.target.parentElement.childNodes[1].innerText);
        db.collection("users").doc(id).delete();
     }

    return(
        <>
        <div className="title">
            <h1>Upload New Photo</h1>
        </div>
        
        <form  id="newForm" onSubmit={onSubmit}>
            <input type="file" onChange={onFileChange}/>
            <input type="text" name="username" placeholder="NAME"/>
            <button>Submit</button>
        </form>
        <ul className="fotos">
            {users.map(
                user => {
                    return <li key={user.name}>
                        <img width="100" height="100" src={user.avatar} alt={user.name}/>
                        <p>{user.name}</p>
                        <button onClick={HandelClick}>Borrar</button>
                    </li>
                }
            )}
        </ul>
        </>
    )
}

export default Cande;

