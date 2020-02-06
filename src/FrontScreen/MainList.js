import React, { Component } from "react";
import AppContainer from './ProduitCards'
import { Container, Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { server } from '../config/config';

class MainList extends Component {
  constructor() {
    super();
    this.state = {
  items: [ ]
 }
}

 componentDidMount() {
  axios.get(server.URL + "/article/allArticle")
   .then(res => {
    console.log(res);
    this.setState({ items: res.data });
   });
 }


 render () {
   console.log(server.URL);
   let prodCards = this.state.items.map(produit => {
     return (
       <Col  xs='10' sm='6' md='3'>
         <AppContainer produit={produit} />
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