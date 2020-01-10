import React, { Component } from "react";
import BasketCard from "./BasketCard";
import { Container, Col, Button, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/redux'; // with addToCart  add another action
//import { Link } from 'react-router-dom';

// shoping basket - main page
export class Basket extends Component {
 constructor(props) {
  super(props);
 }

 render() {

   console.log(this.props.products.productReducer.products)
   let goods = this.props.products.productReducer.products.map(good => {
    return(
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <BasketCard good={good} />
        </Col>
    )
   })
  
  return (
    <Container id="panier">
      <h4>PANIER → Livraison → Paiement </h4>
      {goods}
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Link to='/MainList'>
            <Button style={{ backgroundColor: '#f89d13' }} className="buttonB">Continuer vos achat</Button>
     </Link>
      <Link to='/SeConnecter'>
            <Button style={{ backgroundColor: '#f89d13' }} className="buttonB">Acheter</Button>
    </Link>
        </Col>
      </Row>
    </Container>
  
  );
   
 }
}

// redux
const mapStateToProps = state => ({
  products: state,
});

const mapDispatchToProps = {
  addToCart,

};

const BasketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);

export default BasketContainer;


