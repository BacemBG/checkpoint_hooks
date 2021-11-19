import React from 'react'
import { Navbar, Container , Nav ,Form} from 'react-bootstrap'
import { Rating } from '@mui/material'
const Filter = ({setSearchTitle,setSearchRating}) => {

    return (
        <div>
              <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Form.Group className="mb-3" style={{float:"left"}}>
      <Form.Control type="text" placeholder="search movie" onChange={(e)=>setSearchTitle(e.target.value)} />

   

  </Form.Group>
  <Rating style={{margin:"0px 200px"}}
  name="simple-controlled"
//   value={value}
  onChange={(event, newValue) => {
    setSearchRating(newValue);
  }}
/>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Filter