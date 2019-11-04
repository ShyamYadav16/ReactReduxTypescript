import React from 'react';
import { withStyles, Theme } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = (theme: Theme) => ({
  container: {
    'display': 'flex',
    'flex-wrap': 'wrap',
    'padding-left': '7px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  margin: {
    margin: '24px'
  },
  marginAdd: {
    margin: '24px',
    marginLeft: '1px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
})

type StyleProps = {
  classes: {
    container: string,
    textField: string,
    margin: string,
    marginAdd: string,
    formControl: string,
  }
}

interface BoxComponentProps {
  // name: string;
}

type Props = StyleProps & BoxComponentProps;

const ApplicationForm = (props: Props) => {
  const { classes } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <form className={classes.formControl}>
        <Select
          id="demo-simple-select"
          className={classes.textField}
          value={10}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Application 1</MenuItem>
          <MenuItem value={20}>Application 2</MenuItem>
          <MenuItem value={30}>Application 3</MenuItem>
        </Select>
        <Button
          data-test="buttonComponent"
          style={{"background" : "#3f51b5", "color": "white"}}
          className={classes.textField}
          onClick={handleClickOpen}
        >
          Add Application
        </Button>
        {/*<ApplicationFormDialog {...configureAppDialog} />*/}
      </form>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Application Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the application name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Application Name"
            type="applicationName"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default withStyles(styles)(ApplicationForm)