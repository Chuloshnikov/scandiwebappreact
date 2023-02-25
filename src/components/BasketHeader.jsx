import React, { useState } from 'react';
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, IconButton, Toolbar, Typography, InputBase, Stack, Button, Menu, MenuItem, useTheme } from "@mui/material";
import { Link } from "react-router-dom";


import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";






const BasketHeader = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const[open, setOpen] = useState(false);


  return (
    <Box sx={{ flexGrow: 1, justifyContent: "space-between" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{display: {xs:"block" , sm: "none"}}} onClick={() => setOpen(!open)} sx={{width: 30, height: 30}}/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ScandiWebBasket
          </Typography>
          <Box  sx={{display: 'flex', gap: "8px"}}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    type="text"
                    />
          </Search>
            <Stack spacing={1} direction="row">
                    <Button variant="contained" sx={{display: {xs: "none" , sm: "block"}}}><Link to="/basket-terminal">ADD</Link></Button>
                    <Button variant="contained" sx={{display: {xs: "none" , sm: "block"}}}>Delete</Button>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? ( <DarkModeOutlinedIcon /> ) : ( <LightModeOutlinedIcon /> )}
                    </IconButton>
                    <Typography
                    variant="h3"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
          >
            SW
          </Typography>
            </Stack>
          </Box>
        </Toolbar>
        <Menu 
            bgcolor="otherColor"
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e => setOpen(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}

        >
        <Link to="/basket-terminal"><MenuItem>ADD</MenuItem></Link>
        <MenuItem>Delete</MenuItem>
        
      </Menu>
      </AppBar>
    </Box>
  )
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default BasketHeader