import './diamond-card.css';

function DiamondCard({title, img}) {
  return (
   <div className='diamond-container'>
   <div className="diamond-blue">
    <div className="diamond-black">
    <img src={`img/${img}`} alt='flags'/>
   </div>
   </div>
   <h6>{title}</h6>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
    </div>
  );
}

export default DiamondCard;