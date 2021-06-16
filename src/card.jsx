import './card.css';

function Card({ title, description }) {
  return (
    <div className='game-container'>
      <h1 className='game-title'>{title}</h1>
      <p className='game-description'>{description}</p>
    </div>
  );
}

export default Card;
