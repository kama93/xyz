import './detailGame.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
    <div className='detail'>
        <Menu/>
        <div className='body-datail-container'>
            <h1 className='detailGame-title'>{games[id].title}</h1>
            <p className='detailGame-description'>{games[id].description}</p>
            <h4 className='add-header'>Add my code</h4>
            <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2 form-search"
        aria-label="Search"
      />
      <Button variant="outline-secondary" className='button-search'>Search</Button>
    </Form>
            {games[id].codes.map((x)=>
            <Button variant="outline-secondary" className='button-code'>{x}</Button>
                )}

        </div>
    </div>
  );
}

export default DetailGame;
