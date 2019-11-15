import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import axios from 'axios';


export default class AddPhone extends React.Component {
        constructor(props) {
                super(props);
                
               this.state = {
                        // typeBien: "Maison",
                        name: "",
                        type: "",
                        price: "",
                        rating: "",
                        warranty: "",
                        // available: "",
                } 
                
                this.handleNameChange = this.handleNameChange.bind(this);
                this.handleTypeChange = this.handleTypeChange.bind(this);
                this.handlePriceChange = this.handlePriceChange.bind(this);
                this.handleRatingChange = this.handleRatingChange.bind(this);
                this.handleWarrantyChange = this.handleWarrantyChange.bind(this);
                // this.handleAvailableChange = this.handleAvailableChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleNameChange(event) {
                this.setState({ name: event.target.value });
        }
        handleTypeChange(event) {
                this.setState({ type: event.target.value });
        }
        handlePriceChange(event) {
                this.setState({price: event.target.value });
        }
        handleRatingChange(event) {
                 this.setState({rating: event.target.value });
        }
        handleWarrantyChange(event) {
                this.setState({warranty: event.target.value });
         }
        handleAvailableChange(event) {
                 this.setState({ available: event.target.value });
                }
        

        handleSubmit(event) {
                event.preventDefault();
                const dataUser = {
                        name: this.state.name,
                        type: this.state.type,
                        price: this.state.price,
                        rating: this.state.rating,
                        warranty: this.state.warranty,
                        // available: this.state.available
                };

		axios.post('http://localhost:8080/phone/addPhone', dataUser)
		
                 .then(res => {
			  console.log("FFYUFYFTYFTYG");
                        console.log(res);
                        console.log(res.data);
                })
        };


render() {
        return (
					<Form onSubmit={this.handleSubmit} id="inscrip">
						<h3>Ajouter les produits</h3>
						<FormGroup>
							<Label for="exampleName">Name</Label>
							<Input
								name={this.state.value}
								onChange={this.handleNameChange}
								type="text"
								name="name"
								id="exampleName"
								placeholder="name"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleType">Type</Label>
							<Input
								type={this.state.value}
								onChange={this.handleTypeChange}
								type="text"
								name="type"
								id="exampleType"
								placeholder="prenom"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="examplePrice">Price </Label>
							<Input
								price={this.state.value}
								onChange={this.handlePriceChange}
								type="text"
								name="price"
								id="examplePrice"
								placeholder="price"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleRating">Rating</Label>
							<Input
								rating={this.state.value}
								onChange={this.handleRatingChange}
								type="rating"
								name="rating"
								id="exampleRating"
								placeholder="rating"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleWarranty">Warranty_years</Label>
							<Input
								warranty={this.state.value}
								onChange={this.handleWarantyChange}
								type="warranty_years"
								name="warranty"
								id="exampleWarranty"
								placeholder="warranty_years"
							/>
						</FormGroup>
						{/* <FormGroup>
							<Label for="exampleAvailable">Available</Label>
							<Input
								avaible={this.state.value}
								onChange={this.handleAvailableChange}
								type="available"
								name="available"
								id="exampleAvailable"
								placeholder="available"
							/>
						</FormGroup> */}

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</Form>
				);
    }
}



    




























