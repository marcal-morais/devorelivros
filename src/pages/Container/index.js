/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { userSignOut } from 'actions/Auth';
import Logo from 'assets/Devore.png';
import Pages from 'pages';
import React from 'react';
import { useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    backgroundColor: '#050505',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  logo: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#6FBF8B',
  },
  bottomIcon: { color: '#FFF' },
  container: {
    backgroundColor: '#141414',
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
function Container() {
  const classes = useStyles();
  const dispatch = useDispatch();
  function signout() {
    dispatch(userSignOut());
  }
  return (
    <div className={classes.container}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logo}>
            <img src={Logo} alt="Logo Devore" />
          </div>

          <Button color="inherit" onClick={() => signout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Pages />

      <BottomNavigation showLabels className={classes.bottomBar}>
        <BottomNavigationAction
          label="Biblioteca"
          className={classes.bottomIcon}
          icon={<CollectionsBookmarkIcon />}
        />
        <BottomNavigationAction
          label="Gêneros"
          className={classes.bottomIcon}
          icon={<CollectionsBookmarkIcon />}
        />
        <BottomNavigationAction
          label="Home"
          className={classes.bottomIcon}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Buscar"
          className={classes.bottomIcon}
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Perfil"
          className={classes.bottomIcon}
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Container;
