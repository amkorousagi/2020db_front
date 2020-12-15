import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function View_all_episode() {
  const {account_id} = useParams();
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(["a","b"]);
  useEffect(() => {
    console.log("fetched");
      axios.get(`http://localhost:5000/view_all_episode?`)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
        .then(res => { console.log(res.data); return res.data})
        .then(
          (result) => {
            console.log(result);
            setIsLoaded(true);
            setItems(result);
          }
        )
        .catch(error => {
          setIsLoaded(true);
          setError(error);
          console.error(error);
        })
    }, [])

  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={5}>
        <Card>
        <Typography align="center" color="primary" variant="h4">
          <Link to={`/admin/home/${account_id}`} >
          Home</Link>
          </Typography>
        </Card>
      </GridItem>
        <GridItem xs={12} sm={12} md={8}>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>View all episode</h4>
          <p className={classes.cardCategoryWhite}>episodes</p>
        </CardHeader>
          <Card>

          </Card>
        </GridItem>

      </GridContainer>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
       <TableRow>
         <TableCell align="right">Video name</TableCell>
         <TableCell align="right">View count</TableCell>
         <TableCell align="right">mean rating</TableCell>
         <TableCell align="right">runtime</TableCell>
       </TableRow>
      </TableHead>
      <TableBody>
       {items.map((item) => (
         <TableRow key={""}>
           <TableCell align="right">{item.VIDEO_NAME}</TableCell>
           <TableCell align="right">{item.VIEW_COUNT}</TableCell>
           <TableCell align="right">{item.MEAN_RATING}</TableCell>
           <TableCell align="right">{item.RUNTIME}</TableCell>
         </TableRow>
       ))}
      </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}
