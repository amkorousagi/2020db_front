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
      <Card>
      <Link to={`/admin/home/${account_id}`}>home</Link>
      </Card>
    </GridItem>
      <Button onClick={e=>onClick(e)} color="primary">Search Video</Button>
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
            labelText= "genre(Action or Comedy or Romance or Genre4 or Genre5)"
            id={genre}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: (event) => handleChange_genre(event),
              type: "text",
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText= "version"
            id={version}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: (event) => handleChange_version(event),
              type: "text",
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
          {items.map(item => (
            <GridItem xs={12} sm={12} md={8}>
            <Card>
              <li>
                video_name:{item.VIDEO_NAME}, view_count:{item.VIEW_COUNT}, mean_ratting:{item.MEAN_RATING}, runtime:{item.RUNTIME}
              </li>
              </Card>
            </GridItem>
          ))}
          </Card>
        </GridItem>

      </GridContainer>

    </div>
  );
}
