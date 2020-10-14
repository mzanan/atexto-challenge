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

  return (
    <div>
      <FormControl variant="outlined"  {...props.orderByName}>
        <InputLabel >Order By</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          <MenuItem value={0} >
            <em>None</em>
          </MenuItem>
          <MenuItem value={1} onClick={props.orderByName} >
            Name
          </MenuItem>
          <MenuItem value={2} onClick={props.orderByDate}>
            Date
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
