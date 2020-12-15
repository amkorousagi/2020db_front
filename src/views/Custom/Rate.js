import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
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

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

export default function Rate() {
  const {account_id} = useParams();
  const classes = useStyles();
  const [video_name, setVideo_name] = useState("video name");
  const [description, setDescription] = useState("description");
  const [score, setScore] = useState(1);

  function handleChange_video_name(e) {
    setVideo_name(e.target.value);
    console.log(video_name);
  }
  function handleChange_description(e) {
    setDescription(e.target.value);
    console.log(description);
  }
  function handleChange_score(e) {
    setScore(e.target.value);
    console.log(score);
  }

  function onClick(e){
    console.log(e);

  axios.get(`http://localhost:5000/rate?
account_id=${account_id}&
video_name=${video_name}&
desc=${description}&
score=${score}`)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
    .then(res => { console.log(res.data); return res.data})
    .then(
      (result) => {
        console.log(result);
      }
    )
    .catch(error => {
      console.error(error);
    })

      window.alert("rate!");
  }

  useEffect(() => {
    console.log("fetched");
    console.log(account_id);
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
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Rate video</h4>
                <p className={classes.cardCategoryWhite}>rate video</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText= "video name"
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
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText= "score"
                      id={video_name}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_score(event),
                        type: "text",
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText= "description"
                      id={description}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_description(event),
                        type: "text",
                      }}
                    />
                  </GridItem>

                </GridContainer>

              </CardBody>
              <CardFooter>
                <Button onClick={e=>onClick(e)} color="primary">rate Video</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

      </div>
    );
}
/*
<GridItem xs={12} sm={12} md={4}>
  <Card profile>
    <CardAvatar profile>
      <a href="#pablo" onClick={e => e.preventDefault()}>
        <img src={avatar} alt="..." />
      </a>
    </CardAvatar>
    <CardBody profile>
      <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
      <h4 className={classes.cardTitle}>Alec Thompson</h4>
      <p className={classes.description}>
        Don{"'"}t be scared of the truth because we need to restart the
        human foundation in truth And I love you like Kanye loves Kanye
        I love Rick Owens’ bed design but the back is...
      </p>
      <ul>
        {items.map(item => (
          <li>
            videoid:{item.VIDEO_ID}, score:{item.SCORE}, desc:{item.DESCRIPTION}, account_id:{item.ACCOUNT_ID}
          </li>
        ))}
      </ul>

      <Button color="primary" round>
        Follow
      </Button>
    </CardBody>
  </Card>
</GridItem>
*/
