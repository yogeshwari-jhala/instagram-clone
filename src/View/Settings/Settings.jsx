import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid,Paper } from "@material-ui/core";
import UserDetails from '../../Components/UserDetails/UserDetails';
import PasswordChange from '../../Components/PasswordChange/PasswordChange';
import PrivacyAndTheme from '../../Components/PrivacyAndTheme/PrivacyAndTheme';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    border: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(4),
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5),
    margin: theme.spacing(1),
  },
}));
function Settings(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <div>
          <Paper className={classes.paper}>
            <h1>Settings</h1>
          <Grid container spacing={1}>
        <Grid item xs={4} className={classes.grid}>
  
          <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Edit User Details" {...a11yProps(0)} />
        <Tab label="Change Password" {...a11yProps(1)} />
        <Tab label="Privacy And Theme" {...a11yProps(2)} />
      </Tabs>

        </Grid>
        <Grid item xs={5} >
          <TabPanel value={value} index={0}>
                <UserDetails/>
          </TabPanel>
          <TabPanel value={value} index={1}>
               <PasswordChange/>
          </TabPanel>
          <TabPanel value={value} index={2}>
              <PrivacyAndTheme/>
          </TabPanel>
        </Grid> 
        </Grid>
        </Paper>
      </div>
    )
}
export default Settings;