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

export default function Login() {

  const classes = useStyles();
  const [account_id, setAccount_id] = useState(1);
  const [account_name, setAccount_name] = useState("account name");
  const [account_pw, setAccount_pw] = useState("account pw");


  function handleChange_account_name(e) {
    setAccount_name(e.target.value);
    console.log(account_name);
  }
  function handleChange_account_pw(e) {
    setAccount_pw(e.target.value);
    console.log(account_pw);
  }

  function onClick(e){
    console.log(e);
axios.get(`http://localhost:5000/login?
account_pw=${account_pw}&account_name=${account_name}
`)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
    .then(res => { console.log(res.data); return res.data})
    .then(
       (result) => {
        setAccount_id(result);
        console.log(account_id);
        console.log(result);
        return result;
      }
    ).then(
      result => {
        window.alert("account_id:" + result);
      }
    )
    .catch(error => {
      console.error(error);
    })
  }

  useEffect(() => {
    console.log("fetched");
    console.log(account_id);
    }, [])

    return (
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={5}>
          <Paper background="blue">
          <Typography align="center" color="primary" variant="h4">
            <Link to={`/admin/home/${account_id}`} >
            Home</Link>
            </Typography>
          </Paper>
        </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Sign in</h4>
                <p className={classes.cardCategoryWhite}>Complete your name, pw</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="account name"
                      id={account_name}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_account_name(event),
                        type: "text",
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText= "account pw"
                      id={account_pw}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_account_pw(event),
                        type: "text",
                      }}
                    />
                  </GridItem>
                </GridContainer>


              </CardBody>
              <CardFooter>
                <Button onClick={e=>onClick(e)} color="primary">Sign in</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

      </div>
    );
}
