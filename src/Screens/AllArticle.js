import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

//import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import axios from "axios";
import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
	palette: {
		primary: yellow,
	},
});


const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		"&:nth-of-type(odd)": {
backgroundColor: theme.palette.background.any
		}
	}
}))(TableRow);

const useStyles = makeStyles(theme => ({
	root: {
		width: "80%",
		marginTop: theme.spacing(3),
		overflowX: "auto"
	}


}));

class AllArticle extends Component {


	state = {
		items: [],


	};

	delete(item) {
		console.log("ici");
		console.log(item);

		axios.delete("http://localhost:8080/article/deleteArticle/" + item._id)
			.then(res => {
				console.log(res.data);
				this.componentDidMount();
			})
			.catch(error => {
				console.log(error);
			});
	}

	componentDidMount() {
		axios.get("http://localhost:8080/article/allArticle")
			.then(res => {
				console.log(res);
				this.setState({ items: res.data });
			});
	}


	render() {
		const { classes } = this.props;
		//const Items = this.state.items.map((item, i)=> (

		return (
      <div>
							<h2>Liste de produits</h2>
			<Paper id="tableProduct" className={classes.root}>
  
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Produit</StyledTableCell>
							<StyledTableCell>Type</StyledTableCell>
							<StyledTableCell>Img</StyledTableCell>
							<StyledTableCell>Prix</StyledTableCell>
							<StyledTableCell>Rating</StyledTableCell>
							<StyledTableCell>Discription</StyledTableCell>
							<StyledTableCell>Disponible</StyledTableCell>
							<StyledTableCell>Modifier</StyledTableCell>
							<StyledTableCell>Supprimer</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.items.map(item => (

							<StyledTableRow key={item.name} >
								<StyledTableCell component="th" scope="row">
									{item.name}

								</StyledTableCell>
								<StyledTableCell>{item.type}</StyledTableCell>
								<StyledTableCell>
									<img
										className="allphone-img"
										src={`http://localhost:8080/${item.file}`}
										alt=""
									/>
									
									{/* <img src={`/${item.file}`} />   */}
								{/* <StyledTableCell><img src={`${item.file}`}/>   */}
								</StyledTableCell>
								<StyledTableCell>{item.price}</StyledTableCell>
								<StyledTableCell>{item.rating}</StyledTableCell>
								<StyledTableCell>{item.description}</StyledTableCell>
								<StyledTableCell>
									<Checkbox
										checked={item.available}
										color="Secondary"
									/>
								</StyledTableCell>


								<StyledTableCell>
									<Link to={{ pathname: '/Edit', state: item }}>
										<Button variant="contained"
											color="primary"
											className={classes.button}

										>
											Modifier
    									</Button>

									</Link>
								</StyledTableCell>
								<StyledTableCell>
									<Button
										key={item.id}
										onClick={this.delete.bind(this, item)}
										variant="contained" color="secondary" className={classes.button}>
										Delete
     									 </Button>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>


				<Link to={{ pathname: '/AddArticle' }}>


					<Button variant="contained"
						color="primary"
						className={classes.button}

					>
						Ajouter produit
    							</Button>

				</Link>

			</Paper>
			</div>
		);
	}
}

export default withStyles(useStyles)(AllArticle);