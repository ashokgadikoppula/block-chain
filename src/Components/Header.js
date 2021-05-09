import { AppBar, IconButton, Toolbar, Typography, Menu as MenuBar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  menuItem: {
    color: '#FFFFFF',
    textDecoration: 'none'
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          <Link to='/' className={classes.menuItem}>Block Chain</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
