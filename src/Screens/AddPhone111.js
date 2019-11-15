import React from "react";
import Avatar from "@material-ui/core/Avatar";
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

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


        
class AddPhone111 extends React.Component {
	

	render() {
		const { classes } = this.props;
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={this.classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="name"
							label="Produit"
							name="name"
							// autoComplete="name"
							autoFocus
						/>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="type"
							label="Type"
							name="type"
							autoFocus
						/>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="price"
							label="Prix"
							name="price"
							autoFocus
						/>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="rating"
							label="rating"
							name="rating"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="warranty"
							label="Warranty"
							name="warranty_years"
							autoFocus
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Available"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={this.classes.AddPhone}
						>
							Ajouter la produit
						</Button>
					</form>
					
				</div>
				
			</Container>
		);
	}
}

export default withStyles(useStyles)(AddPhone111);
     

     
