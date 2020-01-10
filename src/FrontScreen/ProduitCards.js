import React, { Component } from "react";
import {
 Card, CardImg, CardText, CardBody, 
 CardTitle, CardSubtitle, Button, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import actions from "../redux/actions"
import { connect } from 'react-redux';
import { addToCart } from '../redux/redux';


export class ProduitCards extends Component {
 constructor(props) {
  super(props);
 }

 render() {
   console.log(this.props.products)
 
  return (
   <div className="mycards">
    <Card >
        <CardImg top width="100%" 
          className="card-img"
          src={`http://localhost:8080/${this.props.produit.file}`}
          alt=""
        />
        <CardBody style={{ backgroundColor: '#1b120f'}}>
          <CardTitle> Produit: {this.props.produit.name}</CardTitle>
        <CardSubtitle id="card"> Type: {this.props.produit.type}</CardSubtitle>
        <CardText id="card">Description: {this.props.produit.description}</CardText>
          <CardText id="card">Rating: {this.props.produit.rating}</CardText>
          <CardText id="prix">Prix: {this.props.produit.price}€</CardText>
      <CardText>
            <Label id="card"check>
              <Input type="checkbox" checked={this.props.produit.available}/>
           disponible
       </Label>
      </CardText>
                  <Link to={{ pathname: '/Basket', state: {foo: this.props.produit }}}>
            <Button style={{ backgroundColor: '#f89d13' }}onClick={() => { console.log(this.props.addToCart({ ...this.props.produit }))}}>Ajouter au panier</Button>{' '}
       </Link>
     </CardBody>
    </Card>
   </div>
  );
 }
}

// Redux
const mapStateToProps = state => ({
  products: state,
});

const mapDispatchToProps = {
  addToCart,
 
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProduitCards);

export default AppContainer;
