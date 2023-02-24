import React, { useState } from 'react';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, IconButton, Toolbar, Typography, Stack, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const BasketTerminalHeader = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "space-between"}}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ScandiWebBasket
          </Typography>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
          >
            SW
          </Typography>
          <Box  sx={{display: 'flex', gap: "8px"}} justifyContent="center">
            <Stack sx={{alignSelf: "flex-end"}} spacing={1} direction="row">
                    <Button variant="contained">Save</Button>
                    <Button variant="contained">Back</Button>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? ( <DarkModeOutlinedIcon /> ) : ( <LightModeOutlinedIcon /> )}
                    </IconButton>
            </Stack>
          </Box>
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default BasketTerminalHeader;