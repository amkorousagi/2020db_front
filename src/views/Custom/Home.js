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

import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Typography from '@material-ui/core/Typography';
import { render } from "react-dom";

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

export default function Home() {
  const {account_id} = useParams();
  const classes = useStyles();


  useEffect(() => {
    console.log("fetched");
    }, [])

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>KnuMovie</h4>
                <p className={classes.cardCategoryWhite}>enjoy video</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/join`} >
                      Sign up</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/login`} >
                      Sign in</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/insert/${account_id}`}>Insert video</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/update/${account_id}`}>Update video</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/rating/${account_id}`}>Rating</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/search_result/${account_id}`}>Search result</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/view_all_movie/${account_id}`}>View all movie</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/view_all_episode/${account_id}`}>View all episode</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h5">
                      <Link to={`/admin/view_all_knu_original/${account_id}`}>View all knu original</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/update_user/${account_id}`}>Update user</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/delete_user/${account_id}`}>Delete user</Link>
                      </Typography>
                      </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/best/${account_id}`}>Recommend video</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/average_rating/${account_id}`}>Average video</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <Card>
                    <Typography align="center" color="primary" variant="h4">
                      <Link to={`/admin/rate/${account_id}`}>Rate video</Link>
                      </Typography>
                    </Card>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

      </div>
    );
}
