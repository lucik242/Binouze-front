import React, { Component } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
//import { Link } from 'react-router-dom';
import axios from "axios";

const useStyles = makeStyles({
 card: {
  maxWidth: 345,
 },
});

class MyCards extends Component {

 state = {
  items: [],
 };

 componentDidMount() {
     axios.get("http://localhost:8080/phone/allPhone")
        .then(res => {
            console.log(res);
         this.setState({ items: res.data });
         });
 }
 

 render() {
  const { classes } = this.props;
	//  const Items = this.state.items.map((item, i)=> (

//export default function ImgMediaCard() {
// const classes = useStyles();

 return (

  <Card className={classes.card}>
   {this.state.items.map(item => (

   <CardActionArea>
          <CardMedia
          //<img src={`${item.file}`} 
         component ="img "
         alt="Contemplative Reptile"
         height="140"
         image="{`${item.file}`}"
         title="Contemplative Reptile"
        />
    <CardContent>
     <Typography gutterBottom variant="h5" component="h2">
       {item.name}
          </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
       Price: {item.price}
       Rating: {item.rating}
           <Checkbox
             checked={item.available}
             color="Secondary"
           />
          </Typography>
          <CardActions>
     <Button size="small" color="primary">
      Share
        </Button>
     <Button size="small" color="primary">
      Learn More
        </Button>
      </CardActions>
       </CardContent>
     </CardActionArea>
    ))}
    </Card>
  );
 }
}
 export default withStyles(useStyles)(MyCards);