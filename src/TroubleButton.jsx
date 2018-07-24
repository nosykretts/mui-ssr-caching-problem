import React from 'react';
import {withStyles} from '@material-ui/core/styles'



function TroubleButton (props) {
  return (
    <button className={props.classes.root}>
      Trouble Button
    </button>
  )
}

const styles = theme => ({
  root: {
    background: 'red'
  }
})

export default withStyles(styles)(TroubleButton)