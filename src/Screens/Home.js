import React, { Component } from 'react'
import AddPhone from './AddPhone'
import AllPhone from './AllPhone'



export default class Home extends Component {
        render() {
                return (
                        <div className="Home">
                                <AllPhone />
                                <AddPhone />
           
                          </div>
                )
        }
}
