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

export default function Average_rating() {
  const {account_id} = useParams();
  const classes = useStyles();
  const [video_name, setVideo_name] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const video_property = ["video id", "video_name", "video_mean_rating","video_type","video_thumnale","sum_view_count","published_date","uploaded_date","runtime"];
  let i = 0;
  function handleChange_video_name(e){
    setVideo_name(e.target.value);
  }

  function onClick(e){
    console.log("fetched");
      axios.get(`http://localhost:5000/search_id?video_name=${video_name}`)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
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
    }

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
      <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Search id</h4>
        <p className={classes.cardCategoryWhite}>get video id</p>
      </CardHeader>
      <CardBody>
      <GridItem xs={12} sm={12} md={3}>
        <CustomInput
          labelText= "video_name"
          id={video_name}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (event) => handleChange_video_name(event),
            type: "text",
          }}
        />
      </GridItem>
      <CardFooter>
        <Button onClick={e=>onClick(e)} color="primary">get id</Button>
      </CardFooter>
      </CardBody>
      </Card>


      </GridContainer>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
       <TableRow>
         <TableCell align="right">Video property name</TableCell>
         <TableCell align="right">Video property value</TableCell>
         </TableRow>
      </TableHead>
      <TableBody>
       {items.map((item) => (
         <TableRow key={""}>
           <TableCell align="right">{video_property[i++]}</TableCell>
           <TableCell align="right">{item}</TableCell>
         </TableRow>
       ))}
      </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}
