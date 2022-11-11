import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ChooseYourLevel() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Level"
          onChange={handleChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={10}>4</MenuItem>
          <MenuItem value={20}>5</MenuItem>
          <MenuItem value={30}>6</MenuItem>
          <MenuItem value={10}>7</MenuItem>
          <MenuItem value={20}>8</MenuItem>
          <MenuItem value={30}>9</MenuItem>
          <MenuItem value={30}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
