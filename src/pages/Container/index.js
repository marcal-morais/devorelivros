import Pages from 'pages';
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  bottomBar: {
    backgroundColor: '#050505',
    position: 'fixed',
    bottom: 0,
    width: '100%',
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
});
function Container() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Devore</Typography>
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
