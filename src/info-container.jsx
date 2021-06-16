import './info.css';
import DiamondCard from './diamond-card'

function Info() {
  return (
    <div className='info-container'>
   <h3>Our Best Games</h3>
   <hr/>
   <div className='all-diamonds-container'>
   <DiamondCard title={'Mario Kart Tour'} img={'s.svg'}/>
    <DiamondCard title={'Pokemon Go'} img={'poke.png'}/>
     <DiamondCard title={'Animal Crossing NH'} img={'palm.jpeg'}/>
     </div>
     <h4>Do you want to share your friends codes?</h4>
     <p>This website has been created to find active friends codes. Don't wait any longer! <br/> Find freinds int the games you like and share your own friend code.</p>
    </div>
  );
}

export default Info;