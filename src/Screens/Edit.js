
import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
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

class Edit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			...this.props.location.state,
			loading: false
		};
	}

	handleChange = e => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		console.log(name, value);
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const dataProduct = {
			name: this.state.name,
			type: this.state.type,
			price: this.state.price,
			rating: this.state.rating,
			description: this.state.description,
			available: this.state.available,
			id: this.state._id
		};

	
		axios
			.put("http://localhost:8080/article/modifArticle", dataProduct)
			.then(res => {
				console.log(res.data);
				this.setState({ loading: false });
				window.location = "/AllArticle";
			});

	};
	render() {
		const { classes } = this.props;

		return (
			<div>
				<h2>	Edit le produits</h2>
			<Container component="main" maxWidth="xs" id="mar">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
			
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={this.handleSubmit}
					>
						<TextField
							value={this.state.name}
							onChange={this.handleChange}
							name="name"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="name"
							label="Produit"
						/>
						<TextField
							value={this.state.type}
							onChange={this.handleChange}
							name="type"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="type"
							label="Type"
						/>
						<TextField
							value={this.state.price}
							onChange={this.handleChange}
							name="price"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="price"
							label="Price"
						/>
						<TextField
							value={this.state.rating}
							onChange={this.handleChange}
							name="rating"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="rating"
							label="Rating"
						/>
						<TextField
							value={this.state.description}
							onChange={this.handleChange}
							name="description"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="description"
							label="Description"
						/>
						<Checkbox
							onChange={this.handleChange}
							name="available"
							type="checkbox"
							color="secondary"
						/>
						Available
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							disabled={this.state.loading}
						>
							Modifier le produit
						</Button>
					</form>
				</div>
			</Container>
			</div>
		);
	}
}
export default withStyles(useStyles)(Edit);
