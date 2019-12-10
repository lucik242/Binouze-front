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
    // const image = this.props.produit.file;

  return (
   <div className="mycards">
    <Card >
        {/* <CardImg src={image} /> */}
       <CardImg src={`/${this.props.produit.file}`} />
        {/* <CardImg  src={this.props.produit.file && <img src={this.props.produit.file} />}/>  */}

        {/* <CardImg src={require (this.props.produit.file)} />  */}
      {/* <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Budvar-mug.JPG/1200px-Budvar-mug.JPG"/>  */}
        <CardBody style={{ backgroundColor: '#1b120f'}}>
          <CardTitle style={{ Color: '#e6dedd' }}> Produit: {this.props.produit.name}</CardTitle>
        <CardSubtitle> Type: {this.props.produit.type}</CardSubtitle>
        <CardText>Description: {this.props.produit.description}</CardText>
          <CardText>Prix: {this.props.produit.price}€</CardText>
        <CardText>Rating: {this.props.produit.rating}</CardText>
      <CardText>
      <Label check>
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

const mapStateToProps = state => ({
  products: state,
});

const mapDispatchToProps = {
  addToCart,
  //getCart
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProduitCards);

export default AppContainer;

// export default ProduitCards;