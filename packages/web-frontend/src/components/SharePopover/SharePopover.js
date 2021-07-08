import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from 'react-share';
import { Share, FileCopy } from '@material-ui/icons';
import useStyles from './SharePopover.styles';

const SharePopover = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <IconButton onClick={handleClick} aria-label='share'>
        <Share />
      </IconButton>
      <Menu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={2}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <WhatsappShareButton
            title='Check-out this awesome Recipe!'
            className={classes.button}
            url={window.location.href}
          >
            <ListItemIcon>
              <WhatsappIcon size={32} round={true} />
            </ListItemIcon>
            <ListItemText primary='WhatsApp' />
          </WhatsappShareButton>
        </MenuItem>
        <MenuItem>
          <FacebookMessengerShareButton
            className={classes.button}
            url={window.location.href}
          >
            <ListItemIcon>
              <FacebookMessengerIcon size={32} round={true} />
            </ListItemIcon>
            <ListItemText primary='Facebook ' />
          </FacebookMessengerShareButton>
        </MenuItem>
        <MenuItem onClick={() => copyToClipboard()}>
          <ListItemIcon>
            <Avatar className={classes.avatar}>
              <FileCopy />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary='Copy to clipboard ' />
        </MenuItem>
      </Menu>
    </>
  );
};

export default SharePopover;