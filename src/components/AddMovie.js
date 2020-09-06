import React, { useState } from 'react';
import MovieRating from './MovieRating'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';

const AddMovie = (props) => {
  const {
    className,
    addMovie
  } = props;

  const [modal, setModal] = useState(false);
  const [newMovies, setNewMovies] = useState({});
  const toggle = () => setModal(!modal);

  const handleChange=e=>{
    setNewMovies({...newMovies,[e.target.name]:e.target.value});
  }
  const Rating = (R) => setNewMovies({ ...newMovies, rate: R });

const add= ()=> {
              if (
                newMovies.name &&
                newMovies.date &&
                newMovies.image &&
                newMovies.rate
              ) {
                addMovie(newMovies);
                toggle();
                setNewMovies({});
              }
              else {alert("All fields are mandatory!" 
              )}
            }
  /*const add=(newMovies)=>{
    addMovie(newMovies);
    toggle();
    setNewMovies({});
  }*/


  return (
    <div>
        
      <Button color="success" onClick={toggle}>Add movie</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add new movie</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label >Name:</Label>
        <Input type="text" name="name" id="name" placeholder="Enter name of movie" value={newMovies.name} onChange={handleChange}/>
        <Label >Date:</Label>
        <Input type="text" name="date" id="date" placeholder="Enter Date of movie" value={newMovies.date} onChange={handleChange}/>
        <Label >Image:</Label>
        <Input type="text" name="image" id="image" placeholder="Give the url of image movie" value={newMovies.image} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <Label >Rating:</Label>
      
            <MovieRating Rating={Rating} />
    
        
      </FormGroup>

      
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add} >Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default AddMovie;