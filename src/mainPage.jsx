import './mainPage.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Menu from './menu';
import Info from './info-container'
import Card from './card';
import Contact from './contact'
import { games } from './games';

function MainPage() {
  return (
    <div className='main-div'>
    <Menu/>
    <div className='body-container'>
    <h1 className='title'>Make friends in your favorites games</h1>
    <Button variant="light" className='button-discover' size="lg">Discover</Button>
    <div className="image1-container">
    <img src='img/picture1.png' alt='gaming'/>
    </div>
    <div className='main-part-container'>
     <div className="image2-container">
    <img src='img/picture2.png' alt='gaming'/>
    </div>
    <div className='body-conatiner'>
     <Info/>
    <div className="card-container">
    {games.map((x)=>
    <Link to={`/detail/${x.id}`} className='linkToDetail'>
     <Card title={x.title} description={x.description}/>
     </Link>
    )}
    </div>
    </div>
    <div className="image3-container">
    <img src='img/picture3.png' alt='gaming'/>
    </div>
    </div>
    </div>
    <div className='contact-main-container'>
    <Contact/>
    </div>
    </div>
  );
}

export default MainPage;
