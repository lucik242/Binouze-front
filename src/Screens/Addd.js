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

class Addd extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			type: "",
			price: "",
			rating: "",
			description: "",
			available: false,
			// selectedFile: null,
			loaded: null,
			file: ""
		};
	}

	handleChange = event => {
		const isCheckbox = event.target.type === "checkbox"; 
		this.setState({
			[event.target.name]: isCheckbox
				? event.target.checked
				: event.target.value
		});
	};

	onFile = event => {
		console.log(event.target.files[0]);
		this.setState({
			file: event.target.files[0]
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const data = new FormData();
		data.append("name", this.state.name);
		data.append("type", this.state.type);
		data.append("price", this.state.price);
		data.append("rating", this.state.rating);
		data.append("description", this.state.description);
		data.append("available", this.state.available);
		data.append("file", this.state.file);

		console.log("no-send", data);
		axios.post("http://localhost:8080/article/addArticle", data).then(res => {
			console.log("send", res.data);
			window.location = "/AllArticle";
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<div>
				<h2>Ajouter les produits</h2>
			<Container component="main" maxWidth="xs" id="mar">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
				
					</Typography>{" "}
					<form
						className={classes.form}
						noValidate
						onSubmit={this.handleSubmit}
					>
						<TextField
							value={this.state.value}
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
							value={this.state.value}
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
							value={this.state.value}
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
							value={this.state.value}
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
							value={this.state.value}
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
							checked={this.state.available}
							onChange={this.handleChange}
							name="available"
							type="checkbox"
							color="secondary"
						/>
						Available 
						<input type="file" name="file" onChange={this.onFile} />{" "}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Ajouter le produit{" "}
						</Button>{" "}
					</form>{" "}
				</div>{" "}
			</Container>
			</div >
		);
	}
}
export default withStyles(useStyles)(Addd);
