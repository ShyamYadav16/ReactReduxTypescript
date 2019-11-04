import React from 'react';
import { withStyles, Theme } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'
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

const StatusCode = (props: Props) => {
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
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Status Code"
            margin="normal"
          />
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Sub Status Code"
            margin="normal"
          />
          <Fab size="small" color="primary" aria-label="add" className={classes.margin}>
            <SearchIcon />
          </Fab>
          <Fab size="small" color="primary" aria-label="add" className={classes.marginAdd}>
            <AddIcon
            onClick={handleClickOpen}
            />
          </Fab>
        </div>
      </form>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Status Code</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the Status Code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Status Code"
            type="statusCode"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Sub Status Code"
            type="subStatusCode"
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

export default withStyles(styles)(StatusCode)