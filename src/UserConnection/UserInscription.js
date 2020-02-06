import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { server } from '../config/config';
import axios from 'axios';

export default class UserInscription extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   name: "",
   email: " ",
   password: " ",
   msg: null
  };
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleNameChange(event) {
  this.setState({ name: event.target.value });
 }
 handleEmailChange(event) {
  this.setState({ email: event.target.value });
 }
 handlePasswordChange(event) {
  this.setState({
   password: event.target.value
  });
 }

 handleSubmit(event) {
  event.preventDefault();
  const dataUser = {
   name: this.state.name,
   email: this.state.email,
   password: this.state.password
  };
  axios.post(server.URL + `/users/users`, dataUser)
   .then(res => {
    console.log(res);
    console.log(res.dataUser)
    console.log(res.data);
    window.location = "/MainList";
   })
 };

 render() {
   console.log(server.URL)
  return (
   <Form onSubmit={this.handleSubmit} id='inscrip'>
    <h3>Inscription</h3>
    <FormGroup>
     <Label for="exampleNom">Nom</Label>
     <Input name={this.state.value} onChange={this.handleNameChange} type="text" name="nom" id="exampleNom" placeholder="nom" />
    </FormGroup>
    <FormGroup>
     <Label for="exampleEmail">Email</Label>
     <Input email={this.state.value} onChange={this.handleEmailChange} type="email" name="email" id="exampleEmail" placeholder="email" />
    </FormGroup>
    <FormGroup>
     <Label for="examplePassword">Password</Label>
     <Input password={this.state.value} onChange={this.handlePasswordChange} type="password" name="password" id="examplePassword" placeholder="password" />
    </FormGroup>

    <button type="submit" class="btn" style={{ backgroundColor: '#f89d13' }} >Submit</button>
   </Form>
  );
 }
}
