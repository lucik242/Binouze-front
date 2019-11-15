import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from "axios";
import { Tooltip } from '@material-ui/core';


const StyledTableCell = withStyles(theme => ({
        head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
        },
        body: {
                fontSize: 14,
        },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
        root: {
                '&:nth-of-type(odd)': {
                        backgroundColor: theme.palette.background.any,
                },
        },
}))(TableRow);

const useStyles = makeStyles(theme => ({
        root: {
                width: '80%',
                marginTop: theme.spacing(3),
                overflowX: 'auto',
        },
        // table: {
        //         minWidth: 700,
        // },
}));


 class AllPhone extends Component {
		constructor(props) {
                        super(props);
                        this.deleteP = this.deleteP.bind(this);
		}

		state = {
                        items: [],
                    
			
		};

                
                // handleChange(event) {
		// 	//event.preventDefault();
                // this.setState({id: event.target.value})
                
                        deleteP(){
                           
			     //  axios.delete("http://localhost:8080/phone/deletePhone/" + document.getElementById("toto").name ) 
			        axios.delete("http://localhost:8080/phone/deletePhone/" + document.getElementById("toto").name ) 


				.then(res => {
					//console.log("FFYUFYFTYFTYG");
				
					console.log(res.data);
				}).catch((error) =>{
                                        console.log(error)
                                })
			
                }
                

                

		componentDidMount() {
			axios.get("http://localhost:8080/phone/allPhone").then(res => {
				console.log(res);
				this.setState({ items: res.data });
			});
		}

		render() {
			const { classes } = this.props;
			// const item = this.state.items.map((item)=>{
			// return <div key={item.id}>
			//   <span>{item._id}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
			// </div>

			//  })

			return (
				<Paper className={classes.root}>
					{/* <div>{item}</div> */}
					<Table className={classes.table} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Phone</StyledTableCell>
								<StyledTableCell>Type</StyledTableCell>
								<StyledTableCell>Price</StyledTableCell>
								<StyledTableCell>Rating</StyledTableCell>
								<StyledTableCell>Warranty</StyledTableCell>
								<StyledTableCell>Edit</StyledTableCell>
								<StyledTableCell>Warranty</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.items.map(item => (
								<StyledTableRow key={item.name}>
									<StyledTableCell component="th" scope="row">
										{item.name}
									</StyledTableCell>
									<StyledTableCell>{item.type}</StyledTableCell>
									<StyledTableCell>{item.price}</StyledTableCell>
									<StyledTableCell>{item.rating}</StyledTableCell>
									<StyledTableCell>{item.warranty}</StyledTableCell>
									<StyledTableCell>{item.warranty}</StyledTableCell>
									<StyledTableCell>
										{item._id}

										{/* <button
											type="submit"
											name={item._id}
											id="toto"
											//onClick={e => this.removeItem(e, item)}
											// onClick={this.state.id}
											onClick={() => {
												this.deleteP(item._id);
											}}
											key={item._id}
										>
											Delete
										</button> */}

										<button
											type="submit"
											name={item._id}
											id="toto"
											//onClick={e => this.removeItem(e, item)}
											// onClick={this.state.id}
											onClick={() => {
												this.deleteP(item._id);
											}}
											key={item._id}
										>
											Delete
										</button>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
			);
		}
 }

export default withStyles(useStyles)(AllPhone);

