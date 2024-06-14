import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function MultiSelectAutoComplete(props) {
  return (
    <Autocomplete
      sx={{ minWidth: "100%", padding: 1 }}
      multiple
      id="checkboxes-tags-demo"
      options={props.data}
      disableCloseOnSelect
      getOptionLabel={(option) => option.Department}
      onChange={(event, newValue) => {
        // setValue(newValue);
        console.log("newValue", newValue);
        const departments = newValue.map((item) => item.Department).join(",");
        props.onSelect(departments);
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            // onChange={(event)=>props.onChange(event.target.value)}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.Department}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}
