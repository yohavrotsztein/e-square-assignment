import { useEffect } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Typography, Toolbar, MenuItem } from '@mui/material';
import { useSelector } from '../redux/store';
import { useNavigate } from "react-router-dom";



export default function Header() {

  const username = useSelector((state) => state.books.username)
  const navigate = useNavigate();

  useEffect(() => {
    if (username === '') {
      navigate("/");
    }
  }, [username, navigate])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {username}
          </Typography>
          <MenuItem component={Link} to='/search'>Search</MenuItem>
          <MenuItem component={Link} to='/wishlist'>Wishlist</MenuItem>
        </Toolbar>
      </AppBar>
    </Box >
  );
}
