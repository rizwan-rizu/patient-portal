import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Box,TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Details
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={{zIndex:"10000000000"}}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box className="Fields-container">
          <form>
            <TextField 
                className="textfield"
                id="fname"
                name="degree"
                label="Medical Degree"
                variant="outlined"
                fullWidth
                autoComplete="off"
            />
            <TextField 
                className="textfield"
                id="fname"
                name="experience"
                label="Experience"
                variant="outlined"
                fullWidth
                autoComplete="off"
            />
            <TextField 
                className="textfield"
                id="fname"
                name="Hospital"
                label="Hospitals"
                variant="outlined"
                fullWidth
                autoComplete="off"
            />
          </form>
        </Box>
      </Dialog>
    </div>
  );
}
