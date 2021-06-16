import './mainPage.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Menu from './menu';
import Card from './card';
import { games } from './games';

function MainPage() {
  return (
    <div>
    <Menu/>
    <div className='body-container'>
    <h1 className='title'>Make friends in your favorites games</h1>
    <Button variant="light" className='button-discover' size="lg">Discover</Button>
    <div className="image1-container">
    <img src='img/picture1.jpg' alt='gaming'/>
    </div>
    <div className="card-container">
    {games.map((x)=>
    <Link to={`/detail/${x.id}`} className='linkToDetail'>
     <Card title={x.title} description={x.description}/>
     </Link>
    )}
    </div>
    </div>
    </div>
  );
}

export default MainPage;
