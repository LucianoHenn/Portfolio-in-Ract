import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import {app} from "../firebase/config";
const db = app.firestore()

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  function HandelClick(e, doc){
    e.stopPropagation();
    const id= (e.target.className);
   db.collection("images").doc(id).delete();
}

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id}
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc.url)}
        > 
        
         
         
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
           <img id="cross" onClick={HandelClick} className={doc.id} src="https://icons-for-free.com/iconfiles/png/512/close+cross+delete+exit+remove+icon-1320085939816384527.png"/>
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;