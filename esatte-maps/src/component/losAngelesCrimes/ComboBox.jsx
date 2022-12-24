import React from "react"
import TextField from "@material-ui/core/TextField"
import { Autocomplete } from "@material-ui/lab"

export default function ComboBox({ arr, mocode, setMocode }) {
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value)
  }

  return (
    <Autocomplete
      value={mocode}
      onChange={async (event, newValue) => {
        setMocode(await getKeyByValue(arr, newValue))
      }}
      // id="combo-box-demo"
      options={Object.values(arr)}
      fullWidth
      getOptionLabel={(item) => item}
      renderInput={(params) => (
        <TextField {...params} label="Select Mocodes" variant="outlined" />
      )}
    />
  )
}
