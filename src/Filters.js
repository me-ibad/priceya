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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'white',
    color: 'black',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expandIcon: {
    transform: 'none !important',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function valuetext(value) {
  return `${value}°C`;
}
function Filters() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState([20, 37]);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <button className='btn-filter' onClick={handleClickOpen}>
        Filter Results
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon style={{ fontSize: 30 }} />
            </IconButton>
            <Typography variant='h5' className={classes.title}>
              Close
            </Typography>
            {/* <Button autoFocus color='inherit' onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <List>
          <Accordion>
            <AccordionSummary
              //   classes={{ expandIcon: classes.expandIcon }}
              expandIcon={<ExpandMoreIcon style={{ fontSize: 30 }} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>Availability</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Checkbox
                    checked={checked}
                    color='primary'
                    style={{
                      transform: 'scale(1.5)',
                    }}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <span>Availabile Now</span>
                </Grid>
                <Grid item xs={12}>
                  <Checkbox
                    checked={checked}
                    color='primary'
                    style={{
                      transform: 'scale(1.5)',
                    }}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <span>Awaiting Stock</span>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              //   classes={{ expandIcon: classes.expandIcon }}
              expandIcon={<ExpandMoreIcon style={{ fontSize: 30 }} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>
                Screen size range
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Checkbox
                    checked={checked}
                    color='primary'
                    style={{
                      transform: 'scale(1.5)',
                    }}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <span>13 to 13.9</span>
                </Grid>
                <Grid item xs={12}>
                  <Checkbox
                    checked={checked}
                    color='primary'
                    style={{
                      transform: 'scale(1.5)',
                    }}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <span>14 to 14.9</span>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              //   classes={{ expandIcon: classes.expandIcon }}
              expandIcon={<ExpandMoreIcon style={{ fontSize: 30 }} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Slider
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay='auto'
                    aria-labelledby='range-slider'
                    getAriaValueText={valuetext}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </List>
      </Dialog>
    </>
  );
}

export default Filters;
