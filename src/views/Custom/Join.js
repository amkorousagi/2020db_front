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

import Paper from '@material-ui/core/Paper';

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

export default function Join() {

  const classes = useStyles();
  const [account_id, setAccount_id] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(["a","b"]);
  const [name, setName] = useState("psc");
  const [account_name, setAccount_name] = useState("account name");
  const [account_pw, setAccount_pw] = useState("account pw");
  const [phone, setPhone] = useState("phone");
  const [sex, setSex] = useState("Sex")
  const [birth_date, setBirth_date] = useState("birth_date(YY/MM/DD)");
  const [address, setAddress] = useState("address");
  const [job, setJob] = useState("job");
  const [permission, setPermission] = useState("permision(admin, basic, premium)");

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }
  function handleChange_account_name(e) {
    setAccount_name(e.target.value);
    console.log(account_name);
  }
  function handleChange_account_pw(e) {
    setAccount_pw(e.target.value);
    console.log(account_pw);
  }
  function handleChange_phone(e) {
    setPhone(e.target.value);
    console.log(phone);
  }
  function handleChange_birth_date(e) {
    setBirth_date(e.target.value);
    console.log(birth_date);
  }
  function handleChange_address(e) {
    setAddress(e.target.value);
    console.log(address);
  }
  function handleChange_job(e) {
    setJob(e.target.value);
    console.log(job);
  }
  function handleChange_permission(e) {
    setPermission(e.target.value);
    console.log(permission);
  }
  function handleChange_sex(e) {
    setSex(e.target.value);
    console.log(sex);
  }

  function onClick(e){
    console.log(e);
axios.get(`http://localhost:5000/join?
account_pw=${account_pw}&account_name=${account_name}&phone=${phone}&sex=${sex}&birth_date=${birth_date}&address=${address}&job=${job}&permission=${permission}
`)//,{"Access-Control-Allow-Origin": "*", "headers":{'Content-Type': 'application/json'}})
    .then(res => { console.log(res.data); return res.data})
    .then(
       (result) => {
        setAccount_id(result[0]);
        console.log(account_id);
        console.log(result);
        return result;
      }
    ).then(
      result => {
        window.alert("account_id:" + result[0]);
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
                <h4 className={classes.cardTitleWhite}>Sign up</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
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
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText= "phone"
                      id={phone}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_phone(event),
                        type: "text",
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                  <Card>
                  <FormControl fullWidth={true} margin={"nomal"}>
                  <InputLabel id="demo-simple-select-label">sex</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sex}
                    onChange={(event) => handleChange_sex(event)}
                  >
                    <MenuItem value={"M"}>male</MenuItem>
                    <MenuItem value={"F"}>female</MenuItem>
                  </Select>
                </FormControl>
                </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText= "birth date(YY/MM/DD)"
                      id={birth_date}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_birth_date(event),
                        type: "text",
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText= "address"
                      id={address}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_address(event),
                        type: "text",
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="job"
                      id={job}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange_job(event),
                        type: "text",
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <Card>
                  <FormControl fullWidth={true} margin={"nomal"}>
                  <InputLabel id="demo-simple-select-label">permission</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={permission}
                    onChange={(event) => handleChange_permission(event)}
                  >
                    <MenuItem value={"admin"}>admin</MenuItem>
                    <MenuItem value={"basic"}>basic</MenuItem>
                    <MenuItem value={"premium"}>premium</MenuItem>
                  </Select>
                  </FormControl>
                  </Card>
                  </GridItem>
                </GridContainer>

              </CardBody>
              <CardFooter>
                <Button onClick={e=>onClick(e)} color="primary">Sign up</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

      </div>
    );
}
