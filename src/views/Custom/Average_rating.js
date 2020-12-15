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

export default function Average_rating() {
  const {account_id} = useParams();
  const classes = useStyles();
  const [video_id, setVideo_id] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(["a","b"]);

  function handleChange_video_id(e){
    setVideo_id(e.target.value);
  }

  function onClick(e){
    console.log("fetched");
      axios.get(`http://localhost:5000/average_rating?video_id=${video_id}`)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
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
        <Link to={`/admin/home/${account_id}`}>home</Link>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <CustomInput
          labelText= "video_id"
          id={video_id}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (event) => handleChange_video_id(event),
            type: "text",
          }}
        />
      </GridItem>
      <CardFooter>
        <Button onClick={e=>onClick(e)} color="primary">get average_rating</Button>
      </CardFooter>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
          {items.map(item => (
            <GridItem xs={12} sm={12} md={8}>
            <Card>
              <li>
                average rating:{item.AVG_SCORE}
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
