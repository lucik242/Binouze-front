import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFromCart } from '../redux/redux'; 

export class BasketCard extends Component {
constructor(props){
 super(props);
}


render() {
 
 return(
  <div className="cardBasket">
   
    <Card body>
     <CardTitle> Produit: {this.props.good.name}</CardTitle>
     <CardText>Type:{this.props.good.type}</CardText>
     <CardText>Price: {this.props.good.price}</CardText>
     <Link to='/MainList'>
      <Button>Continuer vos achat</Button>
     </Link>
     <Link to=' '>
      <Button>Acheter</Button>
     </Link>
     <Link to='/Basket'>
       <Button color="primary" onClick={() => { console.log(this.props.deleteFromCart({ ...this.props.good })) }}>Suprimer</Button>
       </Link>
    </Card>

   
  </div>
 );
}
}

const mapStateToProps = state => ({
  products: state,
});

const mapDispatchToProps = {
  deleteFromCart,
  //addToCart,
  //getCart
};

const BasketStock = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketCard);

export default BasketStock;


//export default BasketCard;