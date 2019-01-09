import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { MenuList, MenuItem } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import { Photo, People, Message, Videocam, Pages, Group, ThumbUp, GetApp, NotificationImportant, Event } from '@material-ui/icons'
import wlpr1 from './Components/assets/img/wlpr1.jpg';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
      toolbar: theme.mixins.toolbar,
    });

function ClippedDrawer(props) {
    const { classes } = props;
  
    return (
<div className={classes.root}>
 <Drawer
 className={classes.drawer}
 variant="permanent"
 classes={{
   paper: classes.drawerPaper,
 }}
>
{/* style={{height:5}} imageStyle={{ width: '10', height: '10' }}  */}
 <div className={classes.toolbar} />
 <MenuList>
 <Avatar alt=" Amar" src={wlpr1} />
      <NavLink path to="/mynewsfeed">
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <Button variant="flat" color="primary">my newsfeed</Button> 
         </MenuItem>
        </NavLink>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <People />
          </ListItemIcon>
          <Button variant="flat" color="primary">my friend</Button> 
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Message />
          </ListItemIcon>
          <Button variant="flat" color="primary">my messages</Button> 
        </MenuItem>
        <NavLink path to="/myphoto">
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Photo />
          </ListItemIcon>
          <Button variant="flat" color="primary">my photo</Button> 
        </MenuItem>
        </NavLink>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Videocam />
          </ListItemIcon>
          <Button variant="flat" color="primary">my videos</Button> 
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Pages />
          </ListItemIcon>
          <Button variant="flat" color="primary">my pages</Button> 
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Group />
          </ListItemIcon>
          <Button variant="flat" color="primary">my group</Button> 
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <ThumbUp />
          </ListItemIcon>
          <Button variant="flat" color="primary">my likes</Button> 
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <GetApp />
          </ListItemIcon>
          <Button variant="flat" color="primary">my app</Button> 
        </MenuItem>
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <NotificationImportant />
          </ListItemIcon>
          <Button variant="flat" color="primary">my notofikasi</Button> 
        </MenuItem>

        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <Event />
          </ListItemIcon>
          <Button variant="flat" color="primary">my events</Button> 
        </MenuItem>
 </MenuList>
 <Divider />
      <Button variant="outlined" color="primary" className={classes.button}>
        Share On Facebook
      </Button>
</Drawer>
    <main className={classes.content}>
        <div className={classes.toolbar} />
        </main>
</div>
    );
   }
  
ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ClippedDrawer);