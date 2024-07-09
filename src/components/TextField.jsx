import { TextField } from "@mui/material"

export default function OwnTextField(props) {

  return <TextField {...props}>
          {props.children}
        </TextField>

};