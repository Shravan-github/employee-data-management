import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function getUniqueDepartments(data) {
  const seen = new Set();
  let filterdData = data.filter((item) => {
    const isDuplicate = seen.has(item.Department);
    seen.add(item.Department);
    const includesComma = item.Department.includes(',');
    return !isDuplicate && !includesComma;
  });
  return filterdData;
}

export default function MultiSelectAutoComplete(props) {
  const { data, value } = props;
  const [options, setOptions] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  React.useEffect(() => {
    /**
     * We will execute further if only data is valid in props
     * This will set the options from Employee list of unique department Employee list to options state variable
     *
     * Also we will filter the selected option based on the props.value from unique departments.
     *
     * **/
    if (!data) return;
    let uniqueData = getUniqueDepartments(data);
    setOptions(uniqueData);

    let selectOptions = uniqueData.filter((item) => value.includes(item.Department));
    setSelectedOptions(selectOptions);
  }, [data, value]);

  return (
    <Autocomplete
      sx={{ minWidth: "100%", padding: 1 }}
      multiple
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.Department}
      value={selectedOptions}
      onChange={(event, newValue) => {
        setSelectedOptions([...newValue]);
        const departments = newValue.map((item) => item.Department).join(",");
        props.onSelect(departments);

      }}
      renderOption={(props, option, selectedOpt) => {
        return (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selectedOpt.selected}
            />
            {option.Department}
          </li>
        );
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Departments" placeholder="Departments" />
      )}
    />
  );
}
