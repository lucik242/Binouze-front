import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

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

    </Card>
   
  </div>
 );
}
}


export default BasketCard;