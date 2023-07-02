import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Chapter1 from "./Chapter1";
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import QuizSection from "./Quiz";
import VideoList from "./VideoList";
import Game from "./Game";

const double = (id) => {
  console.log(`doubling ${id}`);
  return id * 2;
};

function TabContainer({ id, children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children + " " + double(id)}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function TabsSwitcher() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Lesson" />
          <Tab label="Quiz" />
          <Tab label="Videos" />
          <Tab label="Games" />
        </Tabs>
      </AppBar>
      <Breadcrumbs sx={{paddingTop : "16px"}} separator={<NavigateNextIcon fontSize="small" />}>
    <Typography variant="h6" color="inherit">
      Home
    </Typography>
    <Typography variant="h6" color="inherit">
      Class 6
    </Typography>
    <Typography variant="h6" color="inherit">
      Chapter 1
    </Typography>
  </Breadcrumbs>
      {value === 0 && <Chapter1/>}
      {value === 1 && <QuizSection/>}
      {value === 2 && <VideoList/>}
      {value === 3 && <Game/>}
    </div>
  );
}
