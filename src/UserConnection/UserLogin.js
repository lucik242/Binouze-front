import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { server } from '../config/config';
import axios from 'axios';

export class UserLogin extends Component {
 constructor(props) {
  super(props);
  this.state = {
   email: " ",
   password: " "
  };
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleEmailChange(event) {
  this.setState({ email: event.target.value
   });
 }
 handlePasswordChange(event) {
  this.setState({
   password: event.target.value
  });
 }

 handleSubmit(event) {
  event.preventDefault();
  const dataLog = {
   email: this.state.email,
   password: this.state.password
  };

  axios.post(server.URL + `/auth/auth`, dataLog)
   .then(res => {
    console.log(res);
    console.log(res.data);
     window.location = "/MainList";
    // this.props.history.push('/MainList');
   })
 };
 render() {
   console.log(server.URL)
  return (
   <Form onSubmit={this.handleSubmit} id='inscrip'>
    <h3>Login</h3>
    <FormGroup>
     <Label for="exampleEmail">Email</Label>
     <Input email={this.state.value} onChange={this.handleEmailChange} type="email" name="email" id="exampleEmail" placeholder="email" />
    </FormGroup>
    <FormGroup>
     <Label for="examplePassword">Password</Label>
     <Input password={this.state.value} onChange={this.handlePasswordChange} type="password" name="password" id="examplePassword" placeholder="password" />
    </FormGroup>

    <button type="submit" class="btn" style={{ backgroundColor: '#f89d13' }}>Submit</button>
   </Form>
  )
 }
}

export default UserLogin
