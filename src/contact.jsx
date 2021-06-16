import './contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function Contact() {
  return (
    <div className='contact-container'>
   <h3>CONTACT US</h3>
    <hr/>
   <p className='contact-question'>Would you like to add a game? Do you have any questions for us to improve?</p>
   <p className='contact-fill'>Please fill in the form below</p>
   <Form className="form-contact">
   <Form.Group controlId="name">
    <Form.Control type="email" placeholder="Full name" />
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="textarea">
    <Form.Control as="textarea" placeholder="Message" rows={10} />
  </Form.Group>
</Form>
   <Button variant="outline-secondary" className='button-code'>SEND</Button>
   </div>
  );
}

export default Contact;