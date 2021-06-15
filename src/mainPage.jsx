import './mainPage.css';
import { Link } from "react-router-dom";
import Menu from './menu';
import Card from './card';
import { games } from './games';

function MainPage() {
  return (
    <div>
    <Menu/>
    <div className='body-container'>
    <h1 className='title'>Make friends in your favorites games</h1>
    <h5 className='page-description'>Come and swap yours friend codes. This MainPagelication has been built to find active friend codes. Find friends in the games you love and share your own friend code! Please let us know if you want to add new games or see any improvements.</h5>
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
