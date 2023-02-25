import React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, TextField } from "@mui/material";


const BasketTerminalMain = ({ handleSubmit, setSku, setName, setPrice, productType, setProductType, sku, price, name }) => {


  const handleChange = (value) => {
    setProductType(value.target.value);
  }

  return (
    <Box>
       <Box
      component="form"
        onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
        <TextField type="text" id="standard-basic" label="SKU" variant="standard" onChange={(e) => setSku(e.target.value)}/>
        <TextField type="text" id="standard-basic" label="Name" variant="standard" onChange={(e) => setName(e.target.value)}/>
        <TextField type="text" id="standard-basic" label="Price" variant="standard" onChange={(e) => setPrice(e.target.value)}/>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Switcher</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              type="text"
              label="Switcher"
              onChange={handleChange}
            >
              <MenuItem value={"Book"}>Book</MenuItem>
              <MenuItem value={"Furniture"}>Furniture</MenuItem>
              <MenuItem value={"DVD-disc"}>DVD-Disc</MenuItem>
            </Select>
      </FormControl>
    </Box>
    </Box>
  )
}

export default BasketTerminalMain;