import React, { useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, TextField } from "@mui/material";


const BasketTerminalMain = () => {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="SKU" variant="standard" />
      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Price" variant="standard" />
    </Box>
      <Box sx={{ m: "20px 10px"}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Switcher</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Switcher"
              onChange={handleChange}
            >
              <MenuItem value={10}>Book</MenuItem>
              <MenuItem value={20}>Furniture</MenuItem>
              <MenuItem value={30}>DVD-Disc</MenuItem>
            </Select>
      </FormControl>
      </Box>
    </Box>
  )
}

export default BasketTerminalMain;