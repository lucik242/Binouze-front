import React, { Component } from 'react'
import AddPhone11 from './AddPhone11'
import AllPhone from './AllPhone'
import Edit from './Edit'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default class Home extends Component {
        render() {
                return (
                        <div className="Home">
                                <AllPhone />
                                <AddPhone11 />
           
                          </div>
                )
        }
}
