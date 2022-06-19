/*eslint-disable */


import { useState } from 'react';
import { Navbar,Container,NavDropdown, Nav, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import {Link, Route , Switch} from 'react-router-dom';
// import data from './data.js';

// axios
import axios from 'axios';


function App() {

  let [shoes,shoes변경] = useState(Data);
  // let [재고,재고변경] = useState(Data);
  // let [newArray, newArray변경 ] = useState (Data)
  // let [입력값,입력값변경] = useState(Data)

  let [ 재고, 재고변경 ] = useState(10,11,12);
  // 모든 중요한 데이터는 상위 컴포넌트에 저장하는 것이 중요


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to = '/'>Home</Nav.Link>
            <Nav.Link as={Link} to = '/detail'>Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Switch>

      {/* <Route exact path='/'> */}
      <div>
        <div className='Jumbotron'>
          <h1>20% Season Off</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Button variant="primary">Learn more</Button>{' '}
        </div>
        <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='100%' />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}{shoes[0].price}</p>
          </div> */}

          { 
            shoes.map((a,i)=>{
             return <Card shoes={shoes[i]} i={i} />
            })
          }

      </div>
      {/* ajax요청 */}
      <button className='btn btn-primary' onClick={()=>{

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          shoes변경([...shoes, ...result.data]);
        })
        .catch(()=>{
          console.log('실패했음')
        })
      }}>더보기</button>

    </div>
    
      </div>
      
    {/* </Route> */}
    {/* <Route path='/detail/:id'> */}
      <Detail shoes = {shoes} 재고={재고} 재고변경={ 재고변경}/>
    {/* </Route> */}
    {/* <Route path='/detail/:id' > */}
      <div>
        상세정보 페이지 입니다.
      </div>
    {/* </Route> */}
    </Switch>

    </div>
  );
  
}



function Card (props){
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width='100%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}


export default App;
