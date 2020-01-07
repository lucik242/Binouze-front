import React, { Component } from "react";
import UserInscription from './UserInscription'
import UserLogin from './UserLogin'




export default class SeConnecter extends Component {
 render() {
  return (
   <div className="SeConnecter">
 
    <h3>PAS ENCORE CLIENT(E)?</h3>
    <h4>Créez votre compt</h4>
    <UserInscription />
    <h4>___________________________________</h4>

    <h3>DÉJÀ CLIENT(E)?</h3>
    <h4>Connecte-vous</h4>
    <UserLogin />
 
   </div>
  );
 }
}
