import React, { Component } from "react";
import ProduitCards from './ProduitCards'
import { Container, Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

class MainList extends Component {
  constructor() {
    super();
    this.state = {
  items: [ ]
 }
}

 componentDidMount() {
  axios.get("http://localhost:8080/phone/allPhone")
   .then(res => {
    console.log(res);
    this.setState({ items: res.data });
   });
 }


 render () {
   let prodCards = this.state.items.map(produit => {
     return (
       <Col sm='3'>
         < ProduitCards produit={produit} />
       </Col>
     )
   }
   )
     return (
       <Container fluid>
         <Row>
           {prodCards}
         </Row>
       </Container>
     );
     }
  }



export default MainList;