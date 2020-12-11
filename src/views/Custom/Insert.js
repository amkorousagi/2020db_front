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

export default function Insert() {
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

  function onClick(e){
    console.log(e);
    console.log(video_type);
  }

  useEffect(() => {
    console.log("fetched");
      axios.get("http://localhost:5000/rating?account_id=1")//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
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
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Insert video</h4>
              <p className={classes.cardCategoryWhite}>Complete video profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText= {video_type}
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
                    labelText= {video_name}
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
                    labelText= {published_date}
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
                    labelText= {uploaded_date}
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
                    labelText= {runtime}
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
                    labelText= {description}
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
                    labelText= {season}
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
                    labelText= {round}
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

            </CardBody>
            <CardFooter>
              <Button onClick={e=>onClick(e)} color="primary">Insert Video</Button>
            </CardFooter>
          </Card>
        </GridItem>
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
      </GridContainer>

    </div>
  );
}
