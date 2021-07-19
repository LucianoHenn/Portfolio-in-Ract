import "../styles/Index.css";
import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Modal from '../components/Modal';
import ImageGrid from '../components/ImageGrid';
import NavBar from "../components/NavBar";

function Candelaria(){

        const [file, setFile] = useState(null);
        const [error, setError] = useState(null);
        const [selectedImg, setSelectedImg] = useState(null);
        const types = ['image/png', 'image/jpeg'];
      
        const handleChange = (e) => {
          let selected = e.target.files[0];
      
          if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
          } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
          }
        }

    return(
<>
    <NavBar />
    <div className="title">
      <h2>Your Pictures!</h2>
      <p>Click here to upload a new picture</p>
    </div>
    <form onSubmit>
      <label>
        <input type="file" onChange={handleChange} />
        <img className="upload" src="https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png" alt=""/>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
    <ImageGrid setSelectedImg={setSelectedImg} />
    { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
</>
    )
}

export default Candelaria;
