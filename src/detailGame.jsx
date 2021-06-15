import './detailGame.css';
import Menu from './menu';
import { games } from './games';
import { useParams } from "react-router-dom";

function DetailGame(e) {
    let { id } = useParams();
    id--;

    const handleChange= () => {
        games[id].code.push(e.target.value)
    }
  return(
    <div>
        <Menu/>
        <div className='body-datail-container'>
            <h1 className='detailGame-title'>{games[id].title}</h1>
            <p className='detailGame-description'>{games[id].description}</p>
            <h4 className='add-header'>Add my code</h4>
            <form action="/action_page.php">
                <input type="text" id="code" name="code" />
                <input type="submit" value="Share code" className="submit-button" onChange={()=>handleChange(e)}/>
            </form>
            {games[id].codes.map((x)=>
            <div className='codes'>{x}</div>
                )}

        </div>
    </div>
  );
}

export default DetailGame;
