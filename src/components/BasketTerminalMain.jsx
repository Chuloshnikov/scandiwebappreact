import React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, TextField } from "@mui/material";


const BasketTerminalMain = ({ handleSubmit, setSku, setName, setPrice, productType, setProductType, sku, price, name }) => {


  const handleChange = (e) => {
    setProductType(e.target.value);
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
        <TextField type="text" id="standard-basic" value={sku} label="SKU" variant="standard" onChange={(e) => setSku(e.target.value)}/>
        <TextField type="text" id="standard-basic" value={name} label="Name" variant="standard" onChange={(e) => setName(e.target.value)}/>
        <TextField type="number" id="standard-basic" value={price} label="Price" variant="standard" onChange={(e) => setPrice(e.target.value)}/>
        <FormControl fullWidth>
          <InputLabel id="product-type">Switcher</InputLabel>
            <Select
              labelId="product-type"
              id="product-type"
              type="text"
              label="Switcher"
              value={productType}
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