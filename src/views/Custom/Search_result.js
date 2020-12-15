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

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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

export default function Search_result() {
  const {account_id} = useParams();
  const classes = useStyles();
  const [items, setItems] = useState(["a","b"]);
  const [video_type, setVideo_type] = useState("");
  const [genre, setGenre] = useState("");
  const [version, setVersion] = useState("");

  function handleChange_video_type(e) {
    setVideo_type(e.target.value);
    console.log(video_type);
  }
  function handleChange_genre(e) {
    setGenre(e.target.value);
    console.log(genre);
  }
  function handleChange_version(e) {
    setVersion(e.target.value);
    console.log(version);
  }
  useEffect(() => {},[]);

  function onClick(e){
    console.log("fetched");
      axios.get(`http://localhost:5000/search_result?
account_id=${account_id}&
video_type=${video_type}&
genre=${genre}&
version=${version}`)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
        .then(res => { console.log(res.data); return res.data})
        .then(
          (result) => {
            console.log(result);
            setItems(result);
          }
        )
        .catch(error => {
          console.error(error);
        })
    };

  return (
    <div>
    <GridItem xs={12} sm={12} md={5}>
      <Paper background="blue">
      <Typography align="center" color="primary" variant="h4">
        <Link to={`/admin/home/${account_id}`} >
        Home</Link>
        </Typography>
      </Paper>
    </GridItem>
    <Card>
    <CardHeader color="primary">
      <h4 className={classes.cardTitleWhite}>Search video</h4>
      <p className={classes.cardCategoryWhite}>Complete your video specification</p>
    </CardHeader>
    <CardBody>
      <GridContainer alignItems="center">
        <GridItem xs={12} sm={12} md={3}>
        <Card>
        <FormControl fullWidth={true} margin={"nomal"}>
        <InputLabel id="demo-simple-select-label">video type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={video_type}
          onChange={(event) => handleChange_video_type(event)}
        >
          <MenuItem value={"movie"}>movie</MenuItem>
          <MenuItem value={"episode"}>episode</MenuItem>
          <MenuItem value={"knu_original"}>knu_original</MenuItem>
        </Select>
      </FormControl>
      </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
        <Card>
        <FormControl fullWidth={true} margin={"nomal"}>
        <InputLabel id="demo-simple-select-label">genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          onChange={(event) => handleChange_genre(event)}
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={"Action"}>Action</MenuItem>
          <MenuItem value={"Comedy"}>Comedy</MenuItem>
          <MenuItem value={"Romance"}>Romance</MenuItem>
        </Select>
      </FormControl>
      </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
        <Card>
        <FormControl fullWidth={true} margin={"nomal"}>
        <InputLabel id="demo-simple-select-label">country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={version}
          onChange={(event) => handleChange_version(event)}
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={"KR"}>KR</MenuItem>
          <MenuItem value={"US"}>US</MenuItem>
          <MenuItem value={"UA"}>UA</MenuItem>
        </Select>
      </FormControl>
      </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={5}>
        <Button onClick={e=>onClick(e)} color="primary">Search Video</Button>
      </GridItem>
      </GridContainer>
      </CardBody>
      </Card>
      <TableContainer component={Paper}>
   <Table className={classes.table} aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell align="right">Video name</TableCell>
         <TableCell align="right">Video type</TableCell>
         <TableCell align="right">Genre name</TableCell>
         <TableCell align="right">County</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {items.map((item) => (
         <TableRow key={""}>
           <TableCell align="right">{item.VIDEO_NAME}</TableCell>
           <TableCell align="right">{item.VIDEO_TYPE}</TableCell>
           <TableCell align="right">{item.GENRE_NAME}</TableCell>
           <TableCell align="right">{item.COUNTRY}</TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
 </TableContainer>
    </div>
  );
}
