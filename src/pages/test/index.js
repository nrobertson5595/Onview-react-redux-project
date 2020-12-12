import React from 'react';
import testPageAction from '../../redux/actions/testPageActions';
import { connect } from 'react-redux';

import { Button, withStyles } from '@material-ui/core';
const styles = () => ({
  pageHeader: {
      color: '#eee'
  },
  button: {
    color: "#eee",
    borderColor: '#eee'
  }
})



const TestPage = ({ history, classes }) => (
  <div style={{ height: '100%'}}>
  <h1 className={classes.pageHeader}> Hello from test page!</h1>
      <Button variant="outlined" className={classes.button} onClick={() => history.push('/home')}> To home page</Button>
  </div>)

const mapDispatchToProps = (dispatch) => ({
  testPageFunction: dispatch(testPageAction)
})

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TestPage));
