import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.css"
import {Link} from "react-router-dom";
import { useState} from "react";

function Home(){

    const [imageLoaded, setImageLoaded]=useState(false);


    return(
        <>
        
        <div id="header" className={`smooth-image image-${
        imageLoaded ? 'visible' :  'hidden'}`}>
        <Link to="/work" ><h1>Candelaria</h1></Link>
        <Link to="/work"><h4>Photographer</h4></Link>
        </div>
<Carousel controls={false} indicators={false} pause={false} className="carousel">
  <Carousel.Item interval={2000} >
    <img
    fluid
      className={`smooth-image d-block image-${
        imageLoaded ? 'visible' :  'hidden'}`}
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/1.jpg?alt=media&token=8d9cb2ee-08e1-4223-a764-d042dd3bb7d5"
      alt="First slide"
      onLoad={()=> setImageLoaded(true)} />
       {!imageLoaded && (
          <div className="smooth-preloader">
            <span className="loader" />
          </div>
        )}
  </Carousel.Item >
  <Carousel.Item interval={2000}>
    <img
    fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/2.jpg?alt=media&token=8406629e-688f-4e50-adb8-af3ef0b88fe7"
      alt="Third slide"
    />

 
    </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
        fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/3.jpg?alt=media&token=58db14d0-6b51-4bac-a705-5d52a2c5715f"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
    fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/4.jpg?alt=media&token=c3d2e5cb-3c36-4ade-93a0-a7caed3b0e3c"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
    fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/5.jpg?alt=media&token=ac69e2a6-4864-4818-8794-b1b115ff1ebd"
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>
<Link to="/work"><span className={`enter image-${
        imageLoaded ? 'visible' :  'hidden'}`}>Enter</span></Link>
        </>
    )
}

export default Home;