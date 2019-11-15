import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";



const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", 
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

class AddPhone11 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		        name: "",
			type: "",
			price: "",
			rating: "",
			warranty: "",
			 available: "",
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleRatingChange = this.handleRatingChange.bind(this);
		this.handleWarrantyChange = this.handleWarrantyChange.bind(this);
		 this.handleAvailableChange = this.handleAvailableChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}
	handleTypeChange(event) {
		this.setState({ type: event.target.value });
	}
	handlePriceChange(event) {
		this.setState({ price: event.target.value });
	}
	handleRatingChange(event) {
		this.setState({ rating: event.target.value });
	}
	handleWarrantyChange(event) {
		this.setState({ warranty: event.target.value });
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




		//refresh = () => {
		axios
			.post("http://localhost:8080/phone/addPhone", dataUser)

			.then(res => {
				console.log("FFYUFYFTYFTYG");
				//console.log(res);
				console.log(res.data);
			});
	//}
	}
	render() {
		const { classes } = this.props;
		return (
			<Container component="main" maxWidth="xs" id ="mar">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Ajouter les produits
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={this.handleSubmit}
					>
						<TextField
							name={this.state.value}
							onChange={this.handleNameChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="name"
							label="Produit"
							autoFocus
						/>

						<TextField
							type={this.state.value}
							onChange={this.handleTypeChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="type"
							label="Type"
							autoFocus
						/>

						<TextField
							price={this.state.value}
							onChange={this.handlePriceChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="price"
							label="Prix"
							autoFocus
						/>

						<TextField
							rating={this.state.value}
							onChange={this.handleRatingChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="rating"
							label="rating"
							autoFocus
						/>
						 <TextField
							warranty={this.state.value}
							onChange={this.handleWarrantyChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="warranty"
							label="Warranty"
							autoFocus
						/>  
						{/* <TextField
							id="outlined-number"
							label="Number"
							type="number"
							fullWidth
							warranty={this.state.value}
							onChange={this.handleWarantyChange}
							margin="normal"
							variant="outlined"
						/> */}
					
						 
						<FormControlLabel
							control={<Checkbox value="available" color="primary" />}
                                                        label="Available"
                                                        
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Ajouter le produit
						</Button>
					</form>
				</div>
			</Container>
		);
	}
}
export default withStyles(useStyles)(AddPhone11);
