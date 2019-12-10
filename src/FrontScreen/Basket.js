import React, { Component } from "react";
import BasketCard from "./BasketCard";
import { Container, Col, Button, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <BasketCard good={good} />
        </Col>
    )
   })
  
  
  return (
    <Container>
      {goods}
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Link to='/MainList'>
            <Button style={{ backgroundColor: '#f89d13' }} className="buttonB">Continuer vos achat</Button>
     </Link>
      <Link to=' '>
            <Button style={{ backgroundColor: '#f89d13' }} className="buttonB">Acheter</Button>
    </Link>
        </Col>
      </Row>
    </Container>
    // <div>
    // {/* <Link to='/MainList'>
    //   <Button>Continuer vos achat</Button>
    // </Link>

    // <Link to=' '>
    //   <Button>Acheter</Button>
    // </Link>
    // </div > */}
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