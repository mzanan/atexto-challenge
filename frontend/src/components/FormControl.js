import React, { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core/";

export default function ControlledOpenSelect(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const orderByDate = () => {};

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel >Order By</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          <MenuItem value={1} onClick={props.orderByName}>
            Name
          </MenuItem>
          <MenuItem value={2} onClick={orderByDate}>
            Date
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
