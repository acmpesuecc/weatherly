import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';


const styles = makeStyles((theme) => ({
    wrapper: {
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
        margin: '10px',
        paddingLeft: '16px',
        right: 0,
        position: 'relative',
        width: '100%',
        background: 'transparent',
      },
    listContainer: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      },
      listMenus: {
        float: 'right',
      },
      listItems: {
        display: 'inline-block',
        textAlign: 'center',
        padding: '6px 8px',
        color: 'white',
        textDecoration: 'none',
      },
    navbar: {
      backgroundColor: '#000000',
    },
    appTitle: {
      fontSize: '1.5em',
    },
  }));

const Navbar = (props) => {
    const classes = styles();
    
    return (
      <AppBar position="sticky" className={classes.navbar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="Menu"
        >
        <img src={process.env.PUBLIC_URL + '/weatherLogo512.png'} className="img-xxs" height={35} alt="logo weatherly" />
        </IconButton>
        <Typography
            variant="h1"
            color="inherit"
            className={classes.appTitle}
        >
        Weatherly
        </Typography>
        <div className={classes.wrapper}>
        <ul className={classes.listContainer}>
        <li className={classes.listMenus}>
            <Link to="/landing" className={classes.listItems}>
              Landing
            </Link>
          </li>
        <li className={classes.listMenus}>
            <Link to="/dashboard" className={classes.listItems}>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
        </Toolbar>
      </AppBar>
    );
  };
export default Navbar;
