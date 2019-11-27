import React, { Component } from "react";
import BasketCard from "./BasketCard"
import { Container, Row, Col, } from 'reactstrap';
import { connect } from 'react-redux';

import { addToCart } from '../redux/redux'; // with addToCart  add another action
//import { Link } from 'react-router-dom';


export class Basket extends Component {
 constructor(props) {
  super(props);
  //  this.state = {
  //    ...this.props.location.state.foo
  //  }
  //let state = this.setState(props)

 }

 
 render() {
  //let prod = this.props.location.state.foo
  //console.log(this.props.location.state.foo)
  
   console.log(this.props.products.productReducer.products)
    // let goods = "lol"
   let goods = this.props.products.productReducer.products.map(good => {
    return(
      <Col sm="4">
        <BasketCard good={good} />
      </Col>
    )
   })
  
  

  return (
    <Container>
      {goods}
    </Container>
  );
   

 }
}

const mapStateToProps = state => ({
  products: state,
});

const mapDispatchToProps = {
  addToCart,
  //getCart
};

const BasketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);

export default BasketContainer;


//export default Basket;