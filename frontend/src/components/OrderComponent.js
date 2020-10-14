import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core/";

export default function OrderComponent(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl variant="outlined" >
      <InputLabel>Order By</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          <MenuItem value={1} onClick={props.orderByDate}>
            Date
          </MenuItem>
          <MenuItem value={2} onClick={props.orderByName} >
            Name
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
