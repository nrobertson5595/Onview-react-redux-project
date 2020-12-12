import React from 'react';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import TestPage from '../pages/test';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pageContainer: {
    height: 'calc(100% - 64px)',
    border: '1px solid #eee',
    // appBar is 64px tall
    margin: '84px 20px 20px 20px'
  }
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Base React Application ( Material-UI / Redux)
      </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid className={classes.pageContainer} item xs={12}>
          <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/test" exact component={TestPage} />
          </BrowserRouter>
        </Grid>
      </Grid>
    </React.Fragment>


  );
}

export default withRouter(Navigation);