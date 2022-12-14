import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ChooseTechnology({ tech, setTech }) {
  const handleChange = (event) => {
    setTech(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Technology</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tech}
          label="Technology"
          onChange={handleChange}
        >
          <MenuItem value={10}>React</MenuItem>
          <MenuItem value={20}>Python</MenuItem>
          <MenuItem value={30}>Java</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
