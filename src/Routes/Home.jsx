import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.css"
import {Link} from "react-router-dom";

function Home(){
    return(
        <>
        
        <div id="header">
        <Link to="/work" ><h1>Candelaria</h1></Link>
        <Link to="/work"><h4>Photographer</h4></Link>
        </div>
<Carousel controls={false} indicators={false} pause={false} className="carousel">
  <Carousel.Item interval={2000} >
    <img
    fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/1.jpg?alt=media&token=06397303-c41a-47af-835d-17e3931ca813"
      alt="First slide"
    />
  
  </Carousel.Item >
  <Carousel.Item interval={2000}>
    <img
    fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/2.JPG?alt=media&token=c8eb4352-da89-4bf9-a54a-92d02c0d01b9"
      alt="Third slide"
    />

 
    </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
        fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/4.jpg?alt=media&token=6c00c4f6-d217-45b0-a046-037e2a73d763"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
    fluid
      className="d-block "
      src="https://firebasestorage.googleapis.com/v0/b/candelaria-bfe12.appspot.com/o/5.JPG?alt=media&token=475321ef-350c-4849-8fd3-9188daa16d0e"
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>
<Link to="/work"><span className="enter">Enter</span></Link>
        </>
    )
}

export default Home;