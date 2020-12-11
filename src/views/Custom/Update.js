import React, {useState, useEffect} from "react";
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

export default function Update() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(["a","b"]);
  const [name, setName] = useState("psc");
  const [video_type, setVideo_type] = useState("video type(movie or episode or knu_original)");
  const [video_name, setVideo_name] = useState("video name");
  const [published_date, setPublished_date] = useState("published date(YY/MM/DD)");
  const [uploaded_date, setUploaded_date] = useState("uploaded_date(YY/MM/DD)");
  const [runtime, setRuntime] = useState("runtime");
  const [description, setDescription] = useState("description");
  const [season, setSeason] = useState("season (only episode type)");
  const [round, setRound] = useState("round (only episode type)");
  const [video_id, setVideo_id] = useState(1);
  const [movie_id, setMovie_id] = useState(1);
  const [episode_id, setEpisode_id] = useState(1);
  const [knu_original_id, setKnu_original_id] = useState(1);

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }
  function handleChange_video_type(e) {
    setVideo_type(e.target.value);
    console.log(video_type);
  }
  function handleChange_video_name(e) {
    setVideo_name(e.target.value);
    console.log(video_name);
  }
  function handleChange_published_date(e) {
    setPublished_date(e.target.value);
    console.log(published_date);
  }
  function handleChange_uploaded_date(e) {
    setUploaded_date(e.target.value);
    console.log(uploaded_date);
  }
  function handleChange_runtime(e) {
    setRuntime(e.target.value);
    console.log(runtime);
  }
  function handleChange_description(e) {
    setDescription(e.target.value);
    console.log(description);
  }
  function handleChange_season(e) {
    setSeason(e.target.value);
    console.log(season);
  }
  function handleChange_round(e) {
    setRound(e.target.value);
    console.log(round);
  }
  function handleChange_video_id(e) {
    setVideo_id(e.target.value);
    console.log(round);
  }
  function handleChange_movie_id(e) {
    setMovie_id(e.target.value);
    console.log(round);
  }
  function handleChange_episode_id(e) {
    setEpisode_id(e.target.value);
    console.log(round);
  }
  function handleChange_knu_original_id(e) {
    setKnu_original_id(e.target.value);
    console.log(round);
  }


  function onClick(e){
    console.log(e);
    console.log(video_type);
    if(video_type == 'movie'){
    axios.get(`http://localhost:5000/update_video?
account_id=1&
video_type=${video_type}&
video_name=${video_name}&
published_date=${published_date}&
uploaded_date=${uploaded_date}&
runtime=${runtime}&
description=${description}$
movie_id=${movie_id}&
video_id=${video_id}
      `)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
      .then(res => { console.log(res.data); return res.data})
      .then(
        (result) => {
          console.log(result);
        }
      )
      .catch(error => {
        console.error(error);
      })
    }
    else if(video_type=='episode'){
      axios.get(`http://localhost:5000/update_video?
  account_id=1&
  video_type=${video_type}&
  video_name=${video_name}&
  published_date=${published_date}&
  uploaded_date=${uploaded_date}&
  runtime=${runtime}&
  description=${description}&
  season=${season}&
  round=${round}&
  episode_id=${episode_id}&
  video_id=${video_id}
        `)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
        .then(res => { console.log(res.data); return res.data})
        .then(
          (result) => {
            console.log(result);
          }
        )
        .catch(error => {
          console.error(error);
        })
    }
    else{
      axios.get(`http://localhost:5000/update_video?
  account_id=1&
  video_type=${video_type}&
  video_name=${video_name}&
  published_date=${published_date}&
  uploaded_date=${uploaded_date}&
  runtime=${runtime}&
  description=${description}$
  knu_original_id=${knu_original_id}&
  video_id=${video_id}
        `)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
        .then(res => { console.log(res.data); return res.data})
        .then(
          (result) => {
            console.log(result);
          }
        )
        .catch(error => {
          console.error(error);
        })
    }
      window.alert("updated video!");
  }

  useEffect(() => {
    console.log("fetched");
    }, [])

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Update video</h4>
              <p className={classes.cardCategoryWhite}>Complete video profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="video type(movie or episode or knu_original)"
                    id={video_type}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_video_type(event),
                      type: "text",
                    }}
                  />
                </GridItem>
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
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText= "published date(YY/MM/DD)"
                    id={published_date}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_published_date(event),
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText= "uploaded date(YY/MM/DD)"
                    id={uploaded_date}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_uploaded_date(event),
                      type: "text",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText= "runtime"
                    id={runtime}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_runtime(event),
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
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="season"
                    id={season}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_season(event),
                      type: "text",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="round"
                    id={round}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_round(event),
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText= "video_id"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_video_id(event),
                      type: "text",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="episode_id"
                    id={season}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_episode_id(event),
                      type: "text",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="movie_id"
                    id={round}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_movie_id(event),
                      type: "text",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="knu_original_id"
                    id={round}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (event) => handleChange_knu_original_id(event),
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>

            </CardBody>
            <CardFooter>
              <Button onClick={e=>onClick(e)} color="primary">Update Video</Button>
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
